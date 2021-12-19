import { useContext } from "react";
import { Fragment } from "react";
import Footer from "../components/Footer";
import ViewFilm from "../components/ViewFilm";

const ViewMovie = ()=>{

    return(
        <Fragment>
            <ViewFilm/>
            <Footer/>
        </Fragment>
    )
}
export default ViewMovie;