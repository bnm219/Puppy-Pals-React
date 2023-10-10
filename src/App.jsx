import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  // console.log("Data: ", puppies)

  function handleClick() {
    onClick = {
      ()=> { console.log("puppy id: ", puppy.id) }
  }
  // <p onClick={()} key={puppy.id}>{puppy.name} </p>



  return (
    <>
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })

      }
    </>
  )
}


export default App
