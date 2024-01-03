
import './App.css';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Signout from "./components/Signout";
import Navbar from "./components/fixed/Navbar"
import Footer from "./components/fixed/Footer";
import About from './components/About';
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Movielists from './components/Movielists';
import Movieinfo from './components/Movieinfo';
import Watched from './components/personalized/Watched';
import Watchlist from './components/personalized/Watchlist';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext, GlobalProvider } from './context/GlobalState';

export const API_KEY = "6ff5a1d6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const MovieImage = styled.img`
  width: 200px;
  height: 48px;
  margin: 15px;
`;

const SearchBox = styled.div`
  position: relative;
  width: 30%;
  height: 50px;
  margin: 10px 20px ;
  border-radius: 50px;
  background-color: white;
`;

const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  padding-left: 10px;
`; 

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  padding-top: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
const Placeholder = styled.img`
  width: 200px;
  height: 80px;
  margin: 50px;
  opacity: 100%;
`;





const App = () => {

  
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="App">
    <GlobalProvider>  
      <Router>
        
        <Header>
          <AppName>
              <Link to="/">
                <MovieImage src='./images/cinered.png' />
              </Link>
            <Navbar/>
          </AppName>

          <SearchBox>
            <SearchIcon src='./images/search-icon.svg' />
            <SearchInput placeholder='Find Movie...' value={searchQuery} onChange={onTextChange}/>
          </SearchBox>
          
        </Header>
          <Routes>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signout" element={<Signout/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/watched" element={<Watched/>}/>
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <Container>
          {selectedMovie && <Movieinfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
          <MovieListContainer>
            {movieList?.length ? (
              movieList.map((movie, index) => (
                <Movielists
                  key={index}
                  movie={movie}
                  onMovieSelect={onMovieSelect}
                />
              ))
        ) : (
          <Placeholder src="/images/cinered.png" />
        )}
          </MovieListContainer>
        </ Container> 
        <Footer />
      </Router>
    </GlobalProvider>  
    </div>
  );
}



export default App;
