import './App.css';

import { useState, useReducer} from 'react'

const reducer = (state,action)=>{
   switch(action.type){
      case "INCREMRENT":
        return{
          count:state.count + 1
        }
      case "DECREMRENT":
        return{
          count:state.count - 1
        }
      default:
        return state
     
   }
}

const App  =()=>{
  const [counter,setCounter] = useState(0)
  const [inputValue,setInputValue] = useState("")

  const increment = ()=>{
    setCounter(counter + 1)
  }
  const decrement = ()=>{
    setCounter(counter - 1)
  }
  const onChange = (e)=>{
    const newValue = e.target.value
    setInputValue(newValue)
  }

  const [state,dispatch] = useReducer(reducer,{count:100})
  return (
    <div className="App">
      <div>
        <div className="title">InCrement and Decrement Using useState( multiple state )</div>
        <div>
          <button className="btn1" onClick={decrement}>Decrement</button>
          <span>{counter}</span>
          <button className="btn2" onClick={increment}>Increment</button>
        </div>
        <div>
          <input type='text' onChange={onChange}/>
        </div>
        <div>
          {inputValue}
        </div>
      </div>

      <div>
        <div className="title">InCrement and Decrement Using useReducer( single state )</div>
        <div>
          <button className="btn1" onClick={()=>dispatch({type:'DECREMRENT'})}>Decrement</button>
          <span>{state.count}</span>
          <button className="btn2" onClick={()=>dispatch({type:'INCREMRENT'})}>Increment</button>
        </div>
        <div>
          <input type='text' onChange={onChange}/>
        </div>
        <div>
          {inputValue}
        </div>
      </div>
    </div>
  );
}

export default App;
