import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]=useState(15) //for managing state within functional component
  //let counter = 15
  const addValue=()=>{
    //console.log("clicked",counter);
    //counter = counter + 1
    //setCounter(counter + 1) // So here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once. So, the counter will increase by only 1 count.
    /*setCounter(prevCounter => prevCounter + 1)  //To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So, the first function will be called first, the callback will be executed and the next function call will be executed.
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)  // after 1 click it will update the value to 19
    */
    if(counter==20){
      setCounter(counter=20)
    }
    else {
      setCounter(counter+1)
    }
    
  }
  const removeValue=()=>{
    if(counter<=0){
      setCounter(counter=0)
    }
    else {
      setCounter(counter-1)
    }
  }
  return (
    <>
     <h1>chai aur me</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button
      onClick={removeValue}
      >remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
  // virtual DOM is a concept used by React to optimize the process of updating the user interface. Here's a brief explanation of how it works:
/* 1. React uses a concept called "createRoot" to manage the DOM efficiently.
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */


