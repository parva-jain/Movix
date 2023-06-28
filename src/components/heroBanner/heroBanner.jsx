import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImage/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import SearchBar from "../common/searchBar/SearchBar";
import "./style.scss";

const heroBanner = () => {
  // for changing the background image(random) of hero banner on each refresh
  const [background, setBackground] = useState("");

  // this state is for movie or show name through search input
  const [query, setQuery] = useState("");

  // fetched images url(for bg image) from redux store
  const { url } = useSelector((state) => state.home);

  // using useFetch hook to get data of upcoming movies for background image
  const { data, loading, error } = useFetch("/movie/upcoming");

  const navigate = useNavigate();

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background}></Img>
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <SearchBar
            setQuery={setQuery}
            searchQueryHandler={searchQueryHandler}
          ></SearchBar>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default heroBanner;
