import React from "react";


function Main(){
    return(
        <>
             <section className="main">
                <input id="toggle-all" 
                    className="toggle-all"
                    type="checkbox"
                    
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    
                </ul>
            </section>
        </>       
    )
}

export default Main;