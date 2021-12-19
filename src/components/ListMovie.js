
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { viewMovieContext } from "../store/movieContext";
import { IMG_URl } from "../store/movieData";
import "./ListMovie.css";


const ListMovie = ({URL,title})=>{

    const [movie,setMovie] = useState([]);
    const {view,setView} = useContext(viewMovieContext);
    const history = useHistory();
    

    useEffect(async() => {
        const API_URL = URL;
        const response = await fetch(API_URL);
        const data = await response.json()
        setMovie(data.results)
    },[])

    const viewMovieHandler = (item)=>{
        setView(item);
        history.push("/viewmovie")
    }


   let movies =  movie.map((item)=>{
        return(
           <div className="movie">
                <span>prime</span>
                <img src={IMG_URl+item.backdrop_path} alt="" onClick={()=>viewMovieHandler(item)}/>
            </div>
        ) 
    })
    console.log(view);
    return(
       <div className="movies">
            <h4 className="title">{title}</h4>
            <div className="list-movie">
                {movies}
            </div>
       </div>
    )

}
export default ListMovie;