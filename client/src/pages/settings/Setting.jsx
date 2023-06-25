import  "./setting.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingForm"> 
                <label >Profile Picture</label>
                <div className="settingPP">
                    <img src="/assets/my-pic/f.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Lundon" />
                <label>Email</label>
                <input type="email" placeholder="Lundon@gmail.com" />
                <label>Password</label>
                <input type="password"  />
                <button className="settingUpdate">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
