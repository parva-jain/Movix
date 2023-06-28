import { useState, useEffect } from "react";
import { fetchDataFromAPI } from "./utils/api.js";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details.jsx";
import Explore from "./pages/explore/explore.jsx";
import PageNotFound from "./pages/404/pageNotFound.jsx";
import SearchResult from "./pages/searchResult/searchResult.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromAPI("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log("data " + data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:mediaType/:id" element={<Details></Details>}></Route>
        <Route
          path="/search/:query"
          element={<SearchResult></SearchResult>}
        ></Route>
        <Route path="/explore/:mediaType" element={<Explore></Explore>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
