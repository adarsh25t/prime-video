import { useContext } from "react";
import { Fragment } from "react";
import ViewFilm from "../components/ViewFilm";
import { viewMovieContext } from "../store/movieContext";


const ViewMovie = ()=>{

    const {view} = useContext(viewMovieContext);
    console.log(view);
    return(
        <Fragment>
            <ViewFilm/>
        </Fragment>
    )
}
export default ViewMovie;