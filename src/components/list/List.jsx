import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
    const onDeleteHanlder = (todoId) => {

        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId;
        });

        setTodos(newTodos); // 부모컴포넌트에서 가져온 setTodos를 (newTodos)로 다시 채워줌
    };

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            } else {
                return { ...todo };
            }
        });

        setTodos(newTodos);
    };

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHanlder={onDeleteHanlder}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHanlder={onDeleteHanlder}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default List;
