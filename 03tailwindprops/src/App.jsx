import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="rice" btnText="click me"/>
      <Card username="nice" btnText=" me"/>
    </>
  )
}

export default App
//react props:- to send data from one component to another component
/*Props are sent inside the component brackets.
eg. <Card channel = "chaiaurcode"/> 
1 Always use curly brackets for a variable { variableName } to send it as props.
Props can be in any form but passed as a variable.
eg. <Card username = "chaiaurcode"/> 
eg. <Card object = "myobject"/> 
eg. <Card array = "myarray"/> 

2 props send the data in the object form to the component.
so to access ->
                   props.properties or {properties ="defaultValue if props doesn't receive any value"}
eg.props.username
*/