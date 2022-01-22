import { useState, forwardRef, useImperativeHandle, useContext} from 'react';
import {AppData} from '../App'
const Child = forwardRef((props,ref) => {
    const [toggle,setToggle] = useState(false)

    const {counter} = useContext(AppData)
    // access from parent side
    useImperativeHandle(ref,()=>({
        toggler(){
            setToggle(!toggle)
        }
    }))

  return (
      <div>
          <button onClick={()=>setToggle(!toggle)}>Toggle</button>
          {toggle?<p>Toggle Show {counter}</p>:''}
      </div>
  )
});

export default Child;
