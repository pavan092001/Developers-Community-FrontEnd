import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
        
      <div className="topleft">
       <a href="https://stackoverflow.com/" target={"_blank"} ><i className="topIcon fa-brands fa-stack-overflow"></i></a>
       <a href="https://slack.com/intl/en-in/" target={"_blank"} ><i className="topIcon fa-brands fa-slack"></i></a>
       <a href="https://github.com/" target={"_blank"} ><i className="topIcon fa-brands fa-github"></i></a>
       <a href="https://www.facebook.com/" target={"_blank"} ><i class="topIcon fa-brands fa-facebook-square"></i></a>
       <a href="https://twitter.com/?lang=en-in" target={"_blank"} ><i className="topIcon fa-brands fa-twitter"></i></a>
        
     

      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistItem">
            <Link to={"/"} className="link">HOME </Link>
            
          </li>
          <li className="toplistItem">
              <Link to={"/setting"} className="link">ABOUT </Link>
          </li>
          <li className="toplistItem">
          <Link to={"/write"} className="link">WRITE </Link>
          </li>
          {/* <li className="toplistItem">
           <Link  className="link" to={"/"}>CONTACT</Link>
          </li> */}
          <li className="toplistItem" onClick={handleLogout}>
           {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topright">
        {
          user ? (
            <Link to="/setting">
               <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
          ):(
            <ul className="toplist">
              <li className="toplistItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="toplistItem"> 
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul>
          )
        }

        {/* <img className="topImage" src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png" alt="Profile"  /> */}

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

      </div>
    </div>
  )
}
