import { Fragment } from "react";
import { Link } from "react-router-dom";
import './BannerLogin.css'

const BannerLogin = ()=>{
    return(
    <Fragment>
        <div className="banner-login">
            <div className="shadow"></div>
            <img src="" alt="" />
            <div className="banner-login-text">
                <h3>Welcome to Prime Video</h3>
                <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                <button><Link to="/register" className="link">Sign in to join Prime </Link></button>
            </div>
        </div>
    </Fragment> 
    )
}
export default BannerLogin;