import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME </span>
            <br/>
            <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png" alt=""  height={200}  />
            <p className="slogan">The Developer's Community by Developer's for Developer's to create Developer's</p>

          <div className="sidebarItem">
            
            <span className="sidebarTitle">

              CATEGORIES
              </span>
              <ul className="sidebarList">
              {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>  
            </div> 
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              

         

                 <a href="https://stackoverflow.com/" target={"_blank"} ><i className="sidebarIcon fa-brands fa-stack-overflow"></i></a>
                 <a href="https://slack.com/intl/en-in/" target={"_blank"} ><i className="sidebarIcon fa-brands fa-slack"></i></a>
                 <a href="https://github.com/" target={"_blank"} ><i className="sidebarIcon fa-brands fa-github"></i></a>
                 <a href="https://www.facebook.com/" target={"_blank"} ><i class="sidebarIcon fa-brands fa-facebook-square"></i></a>
                 <a href="https://twitter.com/?lang=en-in" target={"_blank"} ><i className="sidebarIcon fa-brands fa-twitter"></i></a>


            </div>
            
           </div>                                                                                                                          
      </div>
    </div>
  )
}
