import { Fragment } from "react"
import BannerLogin from "../components/BannerLogin";
import Navbar from "../components/NavBar"

const Home = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <BannerLogin/>
        </Fragment>
    )
}
export default Home;