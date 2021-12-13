import { Fragment, useContext } from "react"
import BannerLogin from "../components/BannerLogin";
import Navbar from "../components/NavBar"
import { authContext } from "../store/context";


const Home = ()=>{
    const {userName} = useContext(authContext);

    return(
        <Fragment>
            <Navbar/>
            {!userName && <BannerLogin/>}
        </Fragment>
    )
}
export default Home;