import React,{useState,useEffect} from "react";
import { MyContext } from "./MyContext";

const AppState=({children})=>{
   const [text, setText] = useState("");
   const [data,setData]=useState([])

   const fetchdata =async()=>{
    try {
        const response=await fetch(`https://jsonplaceholder.typicode.com/${text}`);
        if(!response.ok){
            throw new Error(`Http error Status ${response.status}`)
        }
        const result = await response.json();
        console.log("at app context",typeof(result))
        console.log("text ",typeof(text))
        setData(result)
        
    } catch (error) {
        console.log(error);
        
    }
  
   
   }

   useEffect(()=>{

    fetchdata();
  
   },[text])


    return (
        <MyContext.Provider value={{ text, setText,data }}>{children}</MyContext.Provider>
    )
}

export default AppState;