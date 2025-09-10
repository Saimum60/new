import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/counterSlice'

const Home = () => {
    let data= useSelector((state)=>state.count.value)
    
    

let disPatch = useDispatch()
let handleIncrement= ()=>{

disPatch(increment())
}
let handleDecrement =()=> {
disPatch(decrement())
}

  return (

    <div>

        <button onClick={handleIncrement}>+</button>
        <div>{data}</div>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Home