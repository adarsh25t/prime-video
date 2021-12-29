import { Fragment } from "react";
import ListMovie from "../components/ListMovie";
import { Action_Adventure,Reality,Talk,Crime_,Kids,News,Sci_Fi_Fantasy,Soap,War_Politics } from "../store/movieData";

const TvShow = ()=>{
    return(
        <Fragment>
            <ListMovie URL={Action_Adventure} title="Action & Adventure"  />
            <ListMovie URL={Reality} title="Reality"  />
            <ListMovie URL={Talk} title="Talk"  />
            <ListMovie URL={Crime_} title="Crime"  />
            <ListMovie URL={Kids} title="Kids"  />
            <ListMovie URL={News} title="News"  />
            <ListMovie URL={Sci_Fi_Fantasy} title="Sci Fi & Fantasy"  />
            <ListMovie URL={Soap} title="Soap"  />
            <ListMovie URL={War_Politics} title="War_Politics"  />
        </Fragment>
    )
}
export default TvShow;