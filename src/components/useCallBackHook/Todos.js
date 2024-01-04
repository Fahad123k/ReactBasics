import { memo } from "react";

function  Todos(props){
    const { todos, addTodos } = props;
    console.log("child")

    return (
        <div>
            <button onClick={addTodos}>Add Todo</button>
            {todos.map((todo, index) => {
                return <p key={index}>{todo + index}</p>
            })}
        </div>
    )
}

export default memo(Todos);