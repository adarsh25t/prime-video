import { Fragment, useContext } from "react"
import Banner from "../components/Banner";
import BannerLogin from "../components/BannerLogin";
import { authContext } from "../store/context";


const Home = ()=>{
   

    return(
        <Fragment>
            <Banner/>
        </Fragment>
    )
}
export default Home;