import React from 'react';
import SearchBar from '../components/SearchBar';
import GifContainer from '../components/GifContainer';

const Home = () => {
    return (
        <div className="flex flex-col w-full items-center">
          <h1 className="text-6xl mt-6">Your Home of GIFS</h1>
          <SearchBar />
          <GifContainer />
        </div>
    )
}

export default Home;