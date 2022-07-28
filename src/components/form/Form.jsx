import React, { useState } from "react";
import "./style.css";

function Form({ todos, setTodos }) {//TodoList 에서 받아온 props
    const initialState = {//기본형식을 넣어주기위해 만듬
        id: 0,
        title: "",
        body: "",
        isDone: false,
    };
    // const [value, setVaule] = useState('초기상태값')

    const [todo, setTodo] = useState(initialState); // Form.jsx 의 자식 (List.jsx)에게 정보를 보내주기위해 state를 만듬

    const onChangeHandler = (event) => {
        // console.log(event.target)
        const { name, value } = event.target;  // 객체 구조분해 
        // console.log(event.target.name)
        // console.log(name) = console.log(event.target.name)

        setTodo({ ...todo, [name]: value, id: todos.length + 1 });//setTodo{}의 풀이 : ...todo는 리액트에서 특정 정보를 선택을 못하기에 전체를 다 가져오기위함, 가져온것에서 ([name]은 key : value는 value) 을 특정해주고,
        console.log(todo)
    };

    const onSubmitHandler = (event) => {
        event.preventDefault(); //이벤트 실행후 페이지 리로딩 되는걸 방지
        setTodos([...todos, todo]); //부모상태값을 받아옴 props , todo 는 현재 form 에서 만들어지는 값

        setTodo(initialState);//setTodo를 초기화시킨다, 제목과내용이 안바뀌면 2개씩 추가되어서 초기화 시켜야줘됨
    };


    return (
        <form onSubmit={onSubmitHandler} className="add-form">
            <div className="input-group">
                <label className="form-label" >제목</label>
                <input
                    type="text"
                    name="title"
                    value={todo.title}
                    className="add-input input-body"
                    onChange={onChangeHandler}//onChange 변화가 일어났는지 탐지
                    placeholder="제목"
                // required  인풋창에 미입력시 경고메세지나오게함.
                />
                <label className="form-label">내용</label>
                <input
                    type="text"
                    name="body"
                    value={todo.body}
                    className="add-input"
                    onChange={onChangeHandler}
                    placeholder="제목"
                />
            </div>
            <button className="add-button">추가하기</button>
        </form>
    );
}

export default Form;




