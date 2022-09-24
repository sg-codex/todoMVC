

function Footer() {
    <>
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    
                </strong>
                item left
            </span>
            <ul className="filters">
                <li>
                    <a href="#/all" >All</a>
                </li>
                <li>
                    <a href="#/active" >Active</a>
                </li>
                <li>
                    <a href="#/completed" >Completed</a>
                </li>
            </ul>
            <button 
                className="clear-completed"
            >
                Clear completed
            </button>
        </footer>
    </>
}

export default Footer;