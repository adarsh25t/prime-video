import { Fragment, useContext} from "react"
import Banner from "../components/Banner";
import ListMovie from "../components/ListMovie";
import WatchLaterMovies from "../components/WatchLaterMovies";
import { navbarContext } from "../store/navbarContext";
import Footer from "../components/Footer";
import { ActionMovies,HorrorMovies,RomanceMovies,
        ComedyMovies,Crime,Drama,Originals,Science_Fiction,Animation,
        Fantasy,Thriller,War,Western,History,Music,Adventure } from "../store/movieData";


const Home = ()=>{
    const {navShow} = useContext(navbarContext);
    return(
        <Fragment>
          { navShow ? "": <div>
           <Banner/>
            <ListMovie/>
            <WatchLaterMovies/>
            <ListMovie URL={ActionMovies} title={"Recommended movies"}/>
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

            <ListMovie URL={Music} title={"Music"}/>
            <ListMovie URL={Adventure} title={"Adventure movies"}/>
            <Footer/>
           </div>}
        </Fragment>
    )
}
export default Home;