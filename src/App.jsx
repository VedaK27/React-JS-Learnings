import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogList from './blogList';

function App() {
  const [blogs , setBlogs] = useState(null) ;
  const [isPending , setIsPending] = useState(true) ;
  const [name , setName] = useState("Veda") ;
  const [error , setError] = useState(null) ;
  const handledelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !=id) ;
        setBlogs(newBlogs) ;
  }
  useEffect(() =>{
    console.log("Use effect ran!") ;
    fetch('http://localhost:8000/blogs').then(res => {
      console.log(res) ;
      if(!res.ok)
      {
        throw Error('could not fetch data for that resource') ;
      }
      return res.json() 
    }).then((data) => {
      console.log(data) ;
      setBlogs(data) ;
      setIsPending(false)
      setError(null)
    }).catch(err=>{
      setIsPending (false) ;
      setError (err.message) ;
      
    })
  },[]);
  return (
    <div className="home">
      {error && <div>{Error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" handledelete={handledelete}/>}
      <button onClick={()=>setName("Rucha")}>OnPress</button>
      <p>{name}</p>
    </div>
      
  )
}

export default App
