import { Fragment ,useEffect,useState} from "react";
import './Banner.css';
import BannerSlider from "./BannerSlider";
import { API_KEY, baseUrl ,IMG_URl} from "../store/movieData";


const Banner = ()=>{

    const [loading,setLoading] = useState(false);
    const [movie,setMovie] = useState();


    useEffect(async()=>{
        setLoading(true);
        const API_URL = `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(API_URL);
        const Data = await response.json();
        setMovie(Data.results);
        setLoading(false);
    },[])
    

    return(
        <Fragment>
            {movie && !loading ? <BannerSlider movie={movie}/> : ""}
        </Fragment>
    )
}
export default Banner;