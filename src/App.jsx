import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogList from './blogList';

function App() {
  const [blogs , setBlogs] = useState([
    { title : "My new website" , body: "lorem ispum..." , author :"Veda" , id:1} ,
    { title : "Welcome Partu!" , body: "lore eispum...." , author:"mario" , id:2} ,
    { title : "Web dev top tips" , body:"lorem ispum..." , author:"ysodhi" , id:3}
  ]) ;

  const [name , setName] = useState("Veda")
  const [rel , setRel] = useState("Girlfriend")
  const handledelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !=id) ;
        setBlogs(newBlogs) ;
  }
  useEffect(() =>{
    console.log("Use effect ran!") ;
  },[name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handledelete={handledelete}/>
      <button onClick={()=>setName("Rucha")}>OnClick</button>
      <p>{name}</p>
    </div>
      
  )
}

export default App
