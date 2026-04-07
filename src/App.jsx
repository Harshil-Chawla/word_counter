import React,{ useState } from 'react'
import ShowText from './components/showText'
import UserInput from './components/userInput'


const App = () => {
  const [val,setVal] = useState("")
  return (
    <div>
      <ShowText val={val}/>
      <UserInput val={val} setVal={setVal}/>
    </div>
  )
}

export default App