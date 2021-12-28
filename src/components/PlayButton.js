import { useHistory} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { viewMovieContext } from '../store/movieContext';
import './PlayButton.css'

const PlayButton = ({item})=>{

    const history = useHistory();
    const {view,setView} = useContext(viewMovieContext);

    const viewMovieHandler = (item)=>{
        setView(item);
        history.push("/viewmovie")
    }

    return(
        <Fragment>
        <button className="p-button fav-btn" onClick={()=>viewMovieHandler(item)}>
            <i class="fas fa-play-circle"> </i>
        </button>
        <span className='play-text' >PLAY MOVIE / </span>
        </Fragment>
    )
}
export default PlayButton;