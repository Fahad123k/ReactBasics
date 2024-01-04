import React, { useMemo, useState } from 'react'


function RedButton(props){
  const {value,Types}=props;
  
  const expenceCalculation=(input)=>{
    console.log("calculation value");
    for (let i = 0; i < 100000000; i++) {
    //  some o[peration]
      
    }
    return input**2;

  }
  const colorVal=null;
  const memoizedValue=useMemo(()=>expenceCalculation(value),[value])

    return(
        <div>
          <p>{Types}:{value}</p>
          {/* before memoization taking time for calucalt */}
          {/* <p>result {expenceCalculation(value)}</p> */}
          {/* <p>result {memoizedValue}</p> */}
          <div style={{
            background:"black",
            border:"1px solid red",
            width:"100px",
            height:"100px", 
            backgroundColor:`rgb(${Types=="red"?value:0},${Types=="blue"?value:0},${Types=="green"?value:0})`

          }}>

          </div>
        </div>
    )
}

export default function UseMemoEx() {
const [inputVal,setInputVal]=useState(0)
const Types={
  red:"Red",
  blue:"Blue",
  green:"Green",
}
const minval=0;
const maxval=255;
const handleInputChange=(e)=>{
  const value = parseInt(e.target.value, 10);
  if(!isNaN(value) && value>=minval && value<=maxval){
    setInputVal(value);
  }

}
  return (
    <div>
      <h3>color :{inputVal}</h3>
      <input
        type="range"
        min={minval}
        max={maxval}
        value={inputVal}
        onChange={handleInputChange}
      />
      <input
        type="range"
        min={minval}
        max={maxval}
        value={inputVal}
        onChange={handleInputChange}
      />
      <input
        type="range"
        min={minval}
        max={maxval}
        value={inputVal}
        onChange={handleInputChange}
      />
        <RedButton value={inputVal} Types={Types.red}/>
        {/* <RedButton value={inputVal} Types={Types.green}/>
        <RedButton value={inputVal} Types={Types.blue}/> */}
    </div>
  )
}
