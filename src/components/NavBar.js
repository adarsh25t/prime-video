import { Fragment, useContext ,useState} from "react";

import { useHistory ,Link} from "react-router-dom";
import { authContext, firebaseContext } from "../store/context";

import './NavBar.css';

const Navbar = ()=>{
    const [showBar,setShowBar] = useState();
    const {firebase} = useContext(firebaseContext);
    const {userName} = useContext(authContext);
    const history = useHistory()


    const signoutHandler = ()=>{
        firebase.auth().signOut();
        history.push('/login')
    }

    const showLiks = ()=>{
        setShowBar(true);
    }

    const hideLink = ()=>{
        setShowBar(false);
    }

    const  logoutLogin = userName ?   <a class="dropdown-item" href="#" onClick={signoutHandler}>Logout</a> : 
                                    <a href=""><Link to="/login" className="link">LogIn</Link></a>;   
    
    const userLogin =  userName ? <div><img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="" /> <span>{userName.displayName}</span></div>: "LogIn";                            
                                    
    return(
       <Fragment>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand"><img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-1.png" alt="" /></Link>
                <button onClick={showLiks} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-color-tal-revivo.png"/>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                         <li class="nav-item">
                         {userName &&   <Link class="nav-link" to="/" onClick={hideLink}>Home</Link>}
                        </li>
                        <li class="nav-item">
                        {userName &&  <Link class="nav-link" to="/movie" onClick={hideLink}>Movies</Link>}
                        </li>
                        <li class="nav-item">
                        {userName &&    <Link class="nav-link" to="/tvshow" onClick={hideLink}>TV Shows</Link>}
                        </li>
                        <li class="nav-item">
                        {userName &&    <Link class="nav-link" to="/watchlist" onClick={hideLink}>Your Watchlist</Link>}
                        </li>
                    </ul>
                    <div class="dropdown d-login">
                        <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{userLogin}</a>
                        <ul class="dropdown-menu bg-light" aria-labelledby="dropdownMenuLink">
                            <li onClick={hideLink}>{logoutLogin}</li>
                            <li><a class="dropdown-item" href="#" onClick={hideLink}>Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
       </Fragment>
    )
}
export default Navbar;