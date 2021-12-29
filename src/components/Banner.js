import { Fragment ,useEffect,useState,useContext} from "react";
import './Banner.css';
import BannerSlider from "./BannerSlider";
import { API_KEY, baseUrl} from "../store/movieData";
import { useHistory } from "react-router-dom";
import { viewMovieContext } from "../store/movieContext";

const Banner = ()=>{

    const [loading,setLoading] = useState(false);
    const [movie,setMovie] = useState();
    const history = useHistory();
    const {setView} = useContext(viewMovieContext);

    useEffect(async()=>{
        setLoading(true);
        const API_URL = `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(API_URL);
        const Data = await response.json();
        setMovie(Data.results);
        setLoading(false);
    },[])

    const viewMovieHandler = (item)=>{
        setView(item);
        history.push("/viewmovie")
    }
    
    return(
        <Fragment>
            {movie && !loading ? <BannerSlider movie={movie} viewMovieHandler={viewMovieHandler}/> : ""}
        </Fragment>
    )
}
export default Banner;