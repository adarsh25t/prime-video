import { Fragment, useEffect, useState } from "react";
import { IMG_URl } from "../store/movieData";
import PlayButton from "./PlayButton";


const BannerSlider = ({movie})=>{

    const bgClass_0 = `linear-gradient(to left, rgba(18, 42, 51, 0.692), rgba(16, 32, 37, 0.973)),
                      url('${IMG_URl+movie[0].backdrop_path}')`;
    const bgClass_1 = `linear-gradient(to left, rgba(18, 42, 51, 0.692), rgba(16, 32, 37, 0.973)),
                      url('${IMG_URl+movie[1].backdrop_path}')`;  
    const bgClass_2 = `linear-gradient(to left, rgba(18, 42, 51, 0.692), rgba(16, 32, 37, 0.973)),
                      url('${IMG_URl+movie[2].backdrop_path}')`;                                   


    return(
       <Fragment>
           
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
           <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" ></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" ></button>
                </div>
            <div class="carousel-inner">
            <div class="carousel-item active" style={{backgroundImage:bgClass_0}}>
            <img  class="d-block w-100" alt="..."/> 
            <div class="carousel-caption ">
                    <div className="carousel-text">
                    <span className="span">Science Fiction</span>
                        <h5>{movie[0].title}</h5>
                        <p>{movie[0].overview}</p>
                        <PlayButton/>
                        <button className="wat-btn"> WATCH TRAILLER</button>
                    </div>
                </div>
            </div>

            <div class="carousel-item" style={{backgroundImage:bgClass_1}}>
            <img  class="d-block w-100" alt="..."/> 
                <div class="carousel-caption  ">
                    <div className="carousel-text">
                    <span className="span">Science Fiction</span>
                    <h5>{movie[1].name ? movie[1].name : movie[1].title}</h5>
                    <p>{movie[1].overview}</p>
                    <PlayButton/>
                    <button className="wat-btn"> WATCH TRAILLER</button>
                  </div>
                </div>
            </div>
            <div class="carousel-item" style={{backgroundImage:bgClass_2}}>
            <img  class="d-block w-100" alt="..."/> 
                <div class="carousel-caption ">
                    <div className="carousel-text">
                    <span className="span">Science Fiction</span>
                        <h5>{movie[2].title}</h5>
                        <p>{movie[2].overview}</p>
                        <PlayButton/>
                        <button className="wat-btn"> WATCH TRAILLER</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </Fragment>

    )
}
export default BannerSlider;