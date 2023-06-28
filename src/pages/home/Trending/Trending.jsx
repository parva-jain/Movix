import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch.js";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs
          data={["Day", "Week"]}
          onTabChange={onTabChange}
        ></SwitchTabs>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}></Carousel>
    </div>
  );
};

export default Trending;
