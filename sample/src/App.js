import Counter from "./Counter";
import {useState} from 'react'



function App(){
const [state, setState]=useState(false)
return(
  <div className="App"> 
  <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
  { state && <Counter/>}
  </div>
  );
}

export default App;

// function App() {
//   const [count,setCount]=useState(0)
//   const addCount=()=>{
//      setCount(count+1)
//      console.log(count)
//   }

//   let employee = [{Name : 'FJP',Age : 26},{Name:'AKC',Age:26}]

        
//   return (
//     <div className="App">
//     <button onClick={addCount} >Add</button>
//     {
//     employee.map((obj,index)=>{
//       return (
//         <Employee key={index} {...obj} />
//       )
//     })
   
//      }
//     </div>   
//   );
// }



