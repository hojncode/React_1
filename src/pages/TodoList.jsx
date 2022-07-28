import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
    //useState 로 자식 컴포넌트에서 보내준다 todos 는 작성되어져잇는 값, setTodos는 작성될 값
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "title1",
            body: "body1 ",
            isDone: false,
        },
        {
            id: 2,
            title: "title2",
            body: "body2",
            isDone: true,
        },

    ]);

    return (
        <Layout>
            <Header />
            {/* props를 내려준다 */}
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
};

export default TodoList;
