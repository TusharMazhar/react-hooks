import './App.css';

import { useState, useReducer, useEffect,useLayoutEffect, useRef} from 'react'
import axios from 'axios'

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

  // useLayoutEffect Works before rendering page
  useLayoutEffect(()=>{
    console.log('useLayoutEffect')
  },[])

  // usEffect Works after rendering page
  useEffect(async()=>{
     const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/')
     console.log(todo.data[0].title)
     setInputValue(todo.data[0].title)
  },[])

  
  const inputRef = useRef(null)

  const onClick = (e)=>{
    inputRef.current.focus()
    inputRef.current.value = ""
  }

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
      <div>
        <div>
           <button className="btn1" onClick={onClick}>Button</button>
        </div>
        <div>
          <input type='text' ref={inputRef}/>
        </div>
      </div>
    </div>
  );
}

export default App;
