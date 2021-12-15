import { Fragment } from 'react/cjs/react.production.min';
import './PlayButton.css'

const PlayButton = ()=>{
    return(
        <Fragment>
        <button className="p-button fav-btn">
            <i class="fas fa-play-circle"> </i>
        </button>
        <span className='play-text'>PLAY MOVIE / </span>
        </Fragment>
    )
}
export default PlayButton;