// import logo from './logo.svg';
import React from 'react';
import Row from './Row'
import Banner from './Banner';
import Nav from './Nav';
import './App.css';
import requests from './request';

function App() {
    return ( <
        div className = 'app' > { /* Navbar */ } <
        Nav / >

        { /* Banner */ } <
        Banner / >

        { /* Component */ } <
        Row title = 'NETFLIX ORIGINALS'
        fetchUrl = { requests.fetchNetflixOriginals }
        isLargeRow = { true }
        /> <
        Row title = 'Trending Now'
        fetchUrl = { requests.fetchTrending }
        /> <
        Row title = 'Top Rated'
        fetchUrl = { requests.fecthTopRated }
        /> <
        Row title = 'Action Movies'
        fetchUrl = { requests.fecthActionMovies }
        /> <
        Row title = 'Comedy Movies'
        fetchUrl = { requests.fecthComedyMovies }
        /> <
        Row title = 'Horror Movies'
        fetchUrl = { requests.fecthHorrorMovies }
        /> <
        Row title = 'Romance Movies'
        fetchUrl = { requests.fecthRomanceMovies }
        /> <
        Row title = 'Documentaries'
        fetchUrl = { requests.fecthDocumentaries }
        /> <
        /div>
    );
}

export default App;