import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch.js";

const OnTheAir = () => {
  //   const [endpoint, setEndpoint] = useState("movie");
  //   const onTabChange = (tab) => {
  //     setEndpoint(tab === "Movies" ? "movie" : "tv");
  //   };
  const { data, loading } = useFetch(`/tv/on_the_air`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">On The Air TV Shows</span>
        {/* <SwitchTabs
          data={["Movies", "TV Shows"]}
          onTabChange={onTabChange}
        ></SwitchTabs> */}
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}></Carousel>
    </div>
  );
};

export default OnTheAir;
