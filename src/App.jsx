import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  // console.log("Data: ", puppies)

  function handleClick() {
  //  ()=>{ console.log("puppy id: ", puppy.id) }
  }
  
  return (
    <>
      {
        puppies.map((puppy) => {
          return  (
          <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
          {puppy.name}
        </p>
        );
        })

      }
      {
        featPupId && <p>{ featPupId }</p>
      }
    </>
  )
}


export default App
