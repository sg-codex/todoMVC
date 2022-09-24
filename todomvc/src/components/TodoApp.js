import React from "react";
// components
import Header from "./Header";
import Main from "./Main";
import TodoItem from "./TodoItem";

function TodoApp() {
    return (
        <section className="todoapp">
            <Header/>
            <Main/>
            <TodoItem/>
        </section>
    )
}

export default TodoApp;