import { Fragment, useEffect, useState } from "react";
import { IMG_URl } from "../store/movieData";


const BannerSlider = ({movie})=>{

  console.log(movie);

    return(
       <Fragment>
           
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={IMG_URl+movie[0].backdrop_path} class="d-block w-100" alt="..."/> 
                <div class="carousel-caption  d-md-block">
                    <h5>{movie[0].title}</h5>
                    <p>{movie[0].overview}</p>
                    <button className="fav-btn">add to Favorite</button> <button className="wat-btn">watch trailler</button>
                </div>
            </div>

            <div class="carousel-item">
            <img src={IMG_URl+movie[1].backdrop_path} class="d-block w-100" alt="..."/> 
                <div class="carousel-caption  d-md-block">
                    <h5>{movie[1].name ? movie[1].name : movie[1].title}</h5>
                    <p>{movie[1].overview}</p>
                    <button className="fav-btn">add to Favorite</button> <button className="wat-btn">watch trailler</button>
                </div>
            </div>
            <div class="carousel-item">
            <img src={IMG_URl+movie[2].backdrop_path} class="d-block w-100" alt="..."/> 
                <div class="carousel-caption  d-md-block">
                    <h5>{movie[2].title}</h5>
                    <p>{movie[2].overview}</p>
                    <button className="fav-btn">add to Favorite</button> <button className="wat-btn">watch trailler</button>
                </div>
            </div>
            </div>
           
    </div>
       </Fragment>

    )
}
export default BannerSlider;