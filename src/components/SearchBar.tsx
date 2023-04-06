import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
    const [gif, setGif] = useState('')
    return (
        <>
          <form className="flex w-1/4 mt-16">
            <input
            className="border border-solid border-gray-300 w-11/12"
            type="text"
            placeholder="Search for a GIF"
            value={gif} 
            onChange={(e) => setGif(e.target.value)}
            />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
        </>
    )
}
export default SearchBar;