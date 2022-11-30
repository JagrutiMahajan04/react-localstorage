import './App.css';
import {useState,useEffect} from "react";
//Localstorage using useEffect-------------------------//
function App() {

  const [count,setCount] = useState(0);
  const [age,setage] = useState(0);


  useEffect(()=>{
    console.log("App component started");
   },[]);

   useEffect(()=>{
    console.log(`Count = ${count}`)
   },[count]);

   useEffect(()=>{
    console.log(`Count=${count},Age = ${age}`)
   },[age]);
  return (
    <>
    <h1>localstorage & useEffect</h1>
    <h2>Count:{count}</h2>
    <h2>Age:{age}</h2>
    
    <button type='button' onClick={()=>{setCount(count+1)}}>Increase Count</button>

    <button type='button' onClick={()=>{setage(age+1)}}>Increase Age</button>

    </>

  );
}

export default App;
