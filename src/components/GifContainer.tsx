import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/configureStore";
import { fetchGifs } from "../redux/gif";



const GifContainer = () => {
  const [count, setCount] = useState(10);
    const gifArray = useSelector((state: RootState) => state.gifs.gifs)
    const dispatch = useDispatch<AppDispatch>()

 useEffect(() => {
    dispatch(fetchGifs(count));
 }, [count, dispatch])

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    setCount((prevCount) => prevCount + 15);
  }
};

  
  return (
    <div className="flex flex-wrap gap-4 m-11" >
      {gifArray.map((gif) => (
        <div
          key={gif.id}
          className="relative flex-grow w-52 h-52"
          style={{ flexBasis: `${gif.width}px` }}
        >
          <img
            src={gif.image}
            alt={gif.title}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <span className="absolute bottom-1.5 text-white">{gif.title}</span>
        </div>
      ))}
    </div>
  );
};
export default GifContainer;
