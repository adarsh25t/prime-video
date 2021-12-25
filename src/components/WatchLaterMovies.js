import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { viewMovieContext } from '../store/movieContext';
import { IMG_URl } from '../store/movieData';
import { watchListContext } from '../store/watchListContext';
import './WatchLaterMovies.css';

const WatchLaterMovies = ()=>{

    const {watchlists,setwatchlist} = useContext(watchListContext);
    const {view,setView} = useContext(viewMovieContext);
    const history = useHistory();
   

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
    
  const watchMovie = watchlists.map((item)=>{
        return(
            <div className="movie">
            <span className="prime">prime</span>
            <div className="add-watch"> 
                <div className="view-icons">
                    <i class="fas fa-play" onClick={()=>viewMovieHandler(item)}></i>
                    <i class="far fa-trash-alt" onClick={()=>removeWatchListHandler(item)}></i>
                </div>
                <h5>{item.title ? item.title : item.name}</h5>
            </div> 
            <img src={IMG_URl+item.backdrop_path} alt="" />
        </div>
        )
    })

    

    return(
        <div className="watchlater">
           {watchlists.length !==0 ? <h4 className="title">Continue watching</h4> : ""}
            <div className="list-movie">
                {watchMovie}
            </div>
       </div>
    )
}
export default WatchLaterMovies;