import React from "react";
import "./style.scss";
import HeroBanner from "../../components/heroBanner/heroBanner.jsx";
import Trending from "./Trending/Trending.jsx";
import Popular from "./Popular/Popular.jsx";
import Toprated from "./TopRated/Toprated.jsx";
import Upcoming from "./Upcoming/Upcoming.jsx";
import OnTheAir from "./OnTheAir/OnTheAir.jsx";

const home = () => {
  return (
    <div className="homePage">
      <HeroBanner></HeroBanner>
      <Trending></Trending>
      <Popular></Popular>
      <Toprated></Toprated>
      <Upcoming></Upcoming>
      <OnTheAir></OnTheAir>
    </div>
  );
};

export default home;
