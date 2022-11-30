//project of localstorage using useEffect//
import {useState,useEffect} from "react";
  
function Count(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        const val = localStorage.getItem("count");
        if(val){
            setCount(parseInt(val));
        }
    },[])

    useEffect(()=>{
        if(count > 0)
        localStorage.setItem("count",count);
       },[count]);

    return(
        <>
         <h1>
            Counter
         </h1>
         <h2>Count:{count}</h2>

         <button type='button' onClick={()=>{setCount(count+1)}}>Increase Count</button>

        </>
    );

}



export default Count;