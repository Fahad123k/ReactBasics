    import React, { useCallback, useState,memo } from 'react'
  import Todos from './Todos';



const  Callbacks=()=> {
        const [count, setCount] = useState(0)
        const [todos, setTodos] = useState(["New Entry "]);

        // const addTodos=()=>{setTodos((todos)=>[...todos,"New Todos"])}
        const addTodos = useCallback(() => {
            setTodos((todos) => [...todos, "New Todos"])
        }, [todos])
        // console.log("Main class")

        const  increment=()=> {
            setCount((prevCount) => prevCount + 1)
        }
        return (
            <div>
                <Todos todos={todos} addTodos={addTodos} />
                <button onClick={increment}>
                    {count}
                </button>
            </div>
        )
    }
export default memo(Callbacks);