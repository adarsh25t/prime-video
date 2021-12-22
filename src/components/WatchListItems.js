import { Fragment, useContext } from "react/cjs/react.development";
import { IMG_URl } from "../store/movieData";
import { watchListContext } from "../store/watchListContext";
import "./WatchListItems.css";

const WatchListItems = ()=>{

    const {watchlists} = useContext(watchListContext);



   const watchlist = watchlists.map((item)=>{
      
        return(
            <Fragment>
                <img src={IMG_URl+item.backdrop_path} alt="" />
            </Fragment>
            
           
        )
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