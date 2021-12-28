import axios from "axios";
import { Fragment,useState} from "react";
import Footer from "../components/Footer";
import ViewFilm from "../components/ViewFilm";
import {API_KEY,baseUrl } from "../store/movieData";
import YouTube from "react-youtube";
const ViewMovie = ()=>{

    const [urlId,setUrlId] = useState("");
    const [closeYoutube,setCloseYoutube] = useState(false);

    const WatchTrailler = (movieId)=>{
        setCloseYoutube(true);
        axios.get(`${baseUrl}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            setUrlId(response.data.results[0].key);
        })
    }

    const closeHandler = ()=>{
        setCloseYoutube(false);
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
    };

    return(
        <Fragment>
            { closeYoutube ? "" : <ViewFilm WatchTrailler={WatchTrailler} setUrlId={setUrlId}/>}
            {urlId && closeYoutube && <div className="youtube">
                <i class="fas fa-plus" onClick={closeHandler}></i>
                <YouTube videoId={urlId} opts={opts}/>
            </div>}
            <Footer/>
        </Fragment>
    )
}
export default ViewMovie;