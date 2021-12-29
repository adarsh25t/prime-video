import { Fragment } from "react";
import ListMovie from "../components/ListMovie";
import { ActionMovies,HorrorMovies,RomanceMovies,
        ComedyMovies,Crime,Drama,Originals,Science_Fiction,Animation,
        Fantasy,Thriller,War,Western,History } from "../store/movieData";


const Movie = ()=>{
    return(
        <Fragment>
            <ListMovie URL={ActionMovies} title={"Action movies"}/>
            <ListMovie URL={Originals} title={"Amazon Original"}/>
            <ListMovie URL={Science_Fiction} title={"ScienceFiction movies"}/>
            <ListMovie URL={HorrorMovies} title={"Horror movies"}/>
            <ListMovie URL={RomanceMovies} title={"Romance movies"}/>
            <ListMovie URL={ComedyMovies} title={"Comedy movies"}/>
            <ListMovie URL={Crime} title={"Crime movies"}/>
            <ListMovie URL={Drama} title={"Drama movies"}/>

            <ListMovie URL={Animation} title={"Animation movies"}/>
            <ListMovie URL={Fantasy} title={"Fantasy movies"}/>
            <ListMovie URL={Thriller} title={"Thriller movies"}/>
            <ListMovie URL={War} title={"War movies"}/>
            <ListMovie URL={Western} title={"Western movies"}/>
            <ListMovie URL={History} title={"History movies"}/>
        </Fragment>
    )
}
export default Movie;