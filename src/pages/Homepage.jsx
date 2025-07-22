import Navbar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import TrendingAnime from "../components/Trendinganime";
import Viewalltrendy from "../ViewAll/ViewAllTrendy";
import Animenews from "../components/Animenews";
export default function Homepage(){
    return (
        <>
          {/* <Navbar/>   */}
          {/* <Carousel/> */}
          <Hero/>
          <TrendingAnime isHome/>
            <Viewalltrendy/>
            <Animenews isHome/>
        </>
    )
}