import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import UpComing from "./upComing/UpComing";
import "./style.scss"

HeroBanner

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <UpComing />
    </div>
  )
}

export default Home