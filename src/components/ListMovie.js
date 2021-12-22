
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { viewMovieContext } from "../store/movieContext";
import { IMG_URl } from "../store/movieData";
import { watchListContext } from "../store/watchListContext";
import "./ListMovie.css";


const ListMovie = ({URL,title})=>{

    const [movie,setMovie] = useState([]);
    const [showAlert,setShowAlert] = useState(false);
    const {view,setView} = useContext(viewMovieContext);
    const history = useHistory();
    
    const {watchlists,setwatchlist} = useContext(watchListContext);

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

    const addWatchListHandler = (item)=>{

        setwatchlist((prev)=>{
                return[
                    ...prev,item
                ]
            })
        
    }
   

   let movies =  movie.map((item)=>{
        return(
           <div className="movie">
                <span className="prime">prime</span>
                <div className="add-watch"> 
                    <div className="view-icons">
                        <i class="fas fa-play" onClick={()=>viewMovieHandler(item)}></i>
                        <i class="fas fa-plus" onClick={()=>addWatchListHandler(item)}> </i>
                    </div>
                    <h5>{item.title ? item.title : item.name}</h5>
                </div> 
                <img src={IMG_URl+item.backdrop_path} alt="" />
            </div>
        ) 
    })
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