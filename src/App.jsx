import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const title = "Welcome to the new blog" ;
  const like= 50 ;
  const person = {name: 'Veda' , age:30} ;
  const link="https://www.google.com" ;
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times</p>

        {/* <p>Author : {person.name}</p> */}
        <p>{"Hello, Veda!"}</p>
        <p>{Math.random()*10}</p>

        <a href={link}>Google Link</a>
      </div>

    </div>
      
  )
}

export default App
