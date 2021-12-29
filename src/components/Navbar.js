import React, { useState ,useContext} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { authContext, firebaseContext } from "../store/context";
import { navbarContext } from "../store/navbarContext";
import "./Navbar.css";
const Navbar = () => {
    const [active, setActive] = useState(false);
    const history = useHistory();
    
    const {firebase} = useContext(firebaseContext);
    const {userName} = useContext(authContext);
    const {navShow,setNavShow} = useContext(navbarContext);

  const handleClick = () => {
    setActive(!active);
    setNavShow(!navShow);
  };

  const signoutHandler = ()=>{
    firebase.auth().signOut();
    history.push('/login')
   }

 
  const changeHandler = ()=>{
    setActive(false);
    setNavShow(false);
  }

  const  logoutLogin = userName ?   <a class="dropdown-item" href="#" onClick={signoutHandler}>Logout</a> : 
                                    <Link to="/login" className="dropdown-item">LogIn</Link>;   
    
  const userLogin =  userName ? <div><img className="userprofile" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="" /> <span className="username">{userName.displayName}</span></div>: "LogIn";                            
       
 
 
  return (
    <nav className="navbar">
      <Link to="/" class="navbar-brand"><img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-1.png" alt="" /></Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className="nav-bar">
        <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-color-tal-revivo.png"/>
        </i>
      </div>
     <ul className={active ? "nav-menu active" : "nav-menu"}>
        <li class="nav-item" onClick={changeHandler}>
            {userName &&   <Link class="nav-link" to="/">Home</Link>}
        </li>
        <li class="nav-item" onClick={changeHandler}>
            {userName &&  <Link class="nav-link" to="/movie" >Movies</Link>}
        </li>
        <li class="nav-item" onClick={changeHandler}>
            {userName &&    <Link class="nav-link" to="/tvshow" >TV Shows</Link>}
        </li>
        <li class="nav-item" onClick={changeHandler}>
            {userName &&    <Link class="nav-link" to="/watchlist" >Your Watchlist</Link>}
        </li>
        <li>
        <div class="dropdown d-login">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{userLogin}</a>
            <ul class="dropdown-menu bg-light" aria-labelledby="dropdownMenuLink">
                <li onClick={changeHandler}>{logoutLogin}</li>
                <li><a class="dropdown-item" href="#" >Profile</a></li>
            </ul>
        </div>
        </li>
      </ul>
        
        

    </nav>
  );
};

export default Navbar;
