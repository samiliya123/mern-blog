import { useEffect, useState } from "react"
import Header from "../../header/Header"
import Post from "../../post/Post"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"
import axios from "axios"
import { useLocation } from "react-router-dom"



export default function Home() {

  const [post, setPost] = useState([])
  const { search } = useLocation()
  

  useEffect(() => {

    const fetchPost = async () => {
          const res = await axios.get("http://localhost:5000/api/post" + search )
          setPost(res.data)
    }
    fetchPost()
    //  axios.get("http://localhost:5000/api/post").then((res) => console.log(res.data) ).catch((err) => console.log(err) )
  },[search])

  return (
    <>
       <Header />
    <div className="home">
        <Post post={post} />
        <Sidebar/>
         
    </div> 
    </>
     )
}
