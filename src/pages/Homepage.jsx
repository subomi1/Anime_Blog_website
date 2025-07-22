import Navbar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import TrendingAnime from "../components/Trendinganime";
import UpcomingAnime from "../components/upcomingAnime";
import Viewalltrendy from "../ViewAll/ViewAllTrendy";
import Trendingmanga from "../components/Trendingmanga";
import Animenews from "../components/Animenews";
import RandomAnimeQuotes from "../components/RandomAnimeQuotes";
export default function Homepage(){
    return (
        <>
          {/* <Navbar/>   */}
          {/* <Carousel/> */}
          <Hero/>
          <TrendingAnime isHome/>
            <Viewalltrendy/>
            {/* <UpcomingAnime/> */}
            {/* <Trendingmanga isHome/> */}
            <Animenews/>
           <RandomAnimeQuotes/>
        </>
    )
}