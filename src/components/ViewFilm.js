import { useContext, useEffect, useState } from "react";
import { viewMovieContext } from "../store/movieContext";
import { IMG_URl,API_KEY,baseUrl } from "../store/movieData";
import "./ViewFilm.css";

const ViewFilm = ()=>{

    const [cast,setCast] = useState([])

    useEffect(async()=>{
        const API_VIEW = `${baseUrl}/movie/${view.id}/credits?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(API_VIEW);
        const data = await response.json()
        setCast(data.cast);
    },[])

  let casts = cast && cast.map((cast,index)=>{
    if(index <5){console.log(cast);
        return(
            <div className="cast">
                <img src={IMG_URl+cast.profile_path} alt="" />
                <h4>{cast.character}</h4>
            </div>
        )
    }
}) 


    const {view} = useContext(viewMovieContext);
    console.log(view);
    const bgClass = `linear-gradient(to left, rgba(15, 32, 39, 0.63), rgba(32, 58, 67, 0.938)),
                      url('${IMG_URl+view.backdrop_path}')`;
    return(
        <div className="view-movie" style={{backgroundImage:bgClass}}>
            <div className="view-details">
                <h4 className="view-title">{view.original_title ? view.original_title : view.name}</h4>
                <h5 className="rate-date">{view.release_date && <span className="date">{view.release_date }</span> }
                    <span className="rate">U/A {view.vote_average}</span></h5>
                <p className="view-paragraph">{view.overview}</p>
                <span className="actions"> <i class="fas fa-plus"> </i>Add Watchlist</span> <span className="actions"><i class="fas fa-play"></i>Watch Trailler</span>
               <div className="casts">
                   {casts}
               </div>
            </div>
        </div>
    )
}
export default ViewFilm;