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

    <div className='bg-gray-400 h-screen'>

        <div className='flex justify-center items-center gap-5 pt-60'>
            <button className='text-5xl border px-10 py-4 bg-yellow-100' onClick={handleIncrement}>+</button>
        <div className='text-7xl'>{data}</div>
        <button className='text-6xl border px-10 py-3 bg-yellow-100' onClick={handleDecrement}>-</button>
        </div>
    </div>
  )
}

export default Home