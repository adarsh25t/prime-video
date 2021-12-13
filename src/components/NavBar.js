import { Fragment } from "react";
import './NavBar.css';

const Navbar = ()=>{
    return(
       <Fragment>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-1.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-color-tal-revivo.png"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TV Shows</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Favorite</a>
                        </li>
                    </ul>
                    <div class="dropdown d-login">
                        <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Welcome <span>ADARSH</span></a>
                        <ul class="dropdown-menu bg-light" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
       </Fragment>
    )
}
export default Navbar;