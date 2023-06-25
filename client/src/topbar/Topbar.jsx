import { useContext } from "react"
import  "./topbar.css"
import { Link } from "react-router-dom"
import { Context } from "../context/context"

export default function Topbar() {
  const {user, dispatch } = useContext(Context)

const handleLogout = () =>{
  dispatch({type: "LOGOUTE"})
}
   
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div> 
           
        <div className="topCenter">
         <ul className="topList">
            <li className="topListItem"> <Link to="/" className="link">HOME</Link></li>
            <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
            <li className="topListItem"> <Link to="/contact" className="link">CONTACT</Link></li>
            <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
            <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
         </ul>
        </div>
          
        <div className="topRight">
          {
            user ? (
              <img src={user.profilepic} alt="" className="topImg" />
               
            ): (
              <ul className="topList">

                <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
              </li>

              <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
              </li>

              </ul>
            )
          }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
          
    </div>
  )
}
