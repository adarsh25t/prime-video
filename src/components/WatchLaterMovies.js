import { useContext } from 'react/cjs/react.development';
import { IMG_URl } from '../store/movieData';
import { watchListContext } from '../store/watchListContext';
import './WatchLaterMovies.css';

const WatchLaterMovies = ()=>{

    const {watchlists} = useContext(watchListContext);
    
  const watchMovie =  watchlists.map((item)=>{
        return(
            <div className="movie">
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