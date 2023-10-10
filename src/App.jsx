import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)

  console.log("Data: ", puppies)

  return (
    <>
      {
        puppies.map((puppy) => {
          return <p>{puppy.name}</p>
        })
      }
    </>
  )
}

export default App
