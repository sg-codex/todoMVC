import React from "react";
import { useState } from "react";

function Header() {

    const [ changeState, setChangeState ] = useState('');

    const changeHandler = (e) => {
        setChangeState(e.target.value)
    }

    

    return(
        <>
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={changeHandler}
                    value={changeState}
                />
            </header>
        </>
    )
}

export default Header;