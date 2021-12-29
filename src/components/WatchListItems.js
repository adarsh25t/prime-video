import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { viewMovieContext } from "../store/movieContext";
import { IMG_URl } from "../store/movieData";
import { watchListContext } from "../store/watchListContext";
import "./WatchListItems.css";

const WatchListItems = ()=>{

    const history = useHistory()
    const {watchlists,setwatchlist} = useContext(watchListContext);
    const {setView} = useContext(viewMovieContext);

    const viewMovieHandler = (item)=>{
        setView(item);
        history.push("/viewmovie")
    }

    const removeWatchListHandler = (item)=>{
        const deletedMovie =  watchlists.filter(items => {
            return items !== item
        })
        setwatchlist(deletedMovie);
    }

    const watchlist = watchlists.map((item)=>{
        return(
            <div className="posters">
            <div className="add-watchs"> 
                <div className="view-icons">
                    <i class="fas fa-play" onClick={()=>viewMovieHandler(item)}></i>
                    <i class="far fa-trash-alt" onClick={()=>removeWatchListHandler(item)}></i>
                </div>
                <h5>{item.title ? item.title : item.name}</h5>
            </div> 
            <img src={IMG_URl+item.backdrop_path} alt="" />
        </div>)
    })

    return(
        <div className="watchlist-wrapper">
            <div className="watchlist-movies">
                {watchlist}
            </div>
        </div>
    )
}

export default WatchListItems;