import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHook() {
    const [data,setData]=useState("");
    // const [count,setCount]=useState(0);
    const count=useRef(0)
    const inputElem=useRef("");
    function ChangeTheme(){
        console.log(inputElem);
        inputElem.current.style.backgroundColor="red"
        inputElem.current.focus()
    }

    useEffect(()=>{
        // setCount(prevCount=>prevCount+1)
        count.current+=1
    })

  return (
    <div>
        <button onClick={ChangeTheme}>Change Theme</button>
        <br/>
       <input
       ref={inputElem}
        type='text'
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    <p>Number of render {count.current}</p>
    </div>
  )
}
