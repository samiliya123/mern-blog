
import Topbar from "./topbar/Topbar";
import Home from "../src/pages/home/Home"
import Write from "../src/pages/write/Write"
import Login from "../src/pages/login/Login"
import Register from "../src/pages/register/Register"
import Setting from "../src/pages/settings/Setting"
import Single from "../src/pages/single/Single"
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context";
    
   

 function App() {
   const {user} = useContext(Context)
  return (
   <>
   <Topbar/>
      <Routes>
         <Route path="/" element={user ? <Home/> : <Register/>}/>
         <Route path="/login" element={user ? <Home/> : <Login/>}/>
         <Route path="/write" element={user ? <Write/> : <Register/>}/>
         <Route path="/settings" element={user ? <Setting/> : <Register/>}/>
         <Route path="/post/:postId" element={<Single/>}/> 
      </Routes>

      </>
      )
}

export default App




