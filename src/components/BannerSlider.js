import { Fragment, useEffect, useState } from "react";
import { IMG_URl } from "../store/movieData";
import PlayButton from "./PlayButton";


const BannerSlider = ({movie})=>{

    return(
       <Fragment>
           
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
           <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" ></button>
                </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img  class="d-block w-100" alt="..."/> 
            <div class="carousel-caption ">
                    <div className="carousel-text">
                    <span className="span">Science Fiction</span>
                        <h5>{movie[0].title}</h5>
                        <p>{movie[0].overview}</p>
                        <PlayButton/>
                        <button className="wat-btn"> WATCH TRAILLER</button>
                    </div>
                    <img src={IMG_URl+movie[0].backdrop_path} alt="" />
                </div>
            </div>

            <div class="carousel-item">
            <img  class="d-block w-100" alt="..."/> 
                <div class="carousel-caption  ">
                    <div className="carousel-text">
                    <span className="span">Science Fiction</span>
                    <h5>{movie[1].name ? movie[1].name : movie[1].title}</h5>
                    <p>{movie[1].overview}</p>
                    <PlayButton/>
                    <button className="wat-btn"> WATCH TRAILLER</button>
                  </div>
                  <img src={IMG_URl+movie[1].backdrop_path} alt="" />
                </div>
            </div>
            <div class="carousel-item">
            <img  class="d-block w-100" alt="..."/> 
                <div class="carousel-caption ">
                    <div className="carousel-text">
                    <span className="span">Science Fiction</span>
                        <h5>{movie[2].title}</h5>
                        <p>{movie[2].overview}</p>
                        <PlayButton/>
                        <button className="wat-btn"> WATCH TRAILLER</button>
                    </div>
                    <   img src={IMG_URl+movie[2].backdrop_path} alt="" />
                </div>
            </div>
            </div>
           
    </div>
       </Fragment>

    )
}
export default BannerSlider;