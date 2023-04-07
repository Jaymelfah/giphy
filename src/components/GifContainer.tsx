import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/configureStore";
import { fetchGifs } from "../redux/gif";
import loads from '../images/ZZ5H.gif'



const GifContainer = () => {
  const [count, setCount] = useState(10);
    const gifArray = useSelector((state: RootState) => state.gifs.gifs)
    const [loadedImages, setLoadedImages] = useState<string[]>([]);
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

const handleImageLoad = (gifId: string) => {
  setLoadedImages((prevLoadedImages) => [...prevLoadedImages, gifId]);
};

  
  return (
    <div className="flex flex-wrap gap-4 m-11" >
      {gifArray.map((gif) => (
        <div
          key={gif.id}
          className="relative flex-grow w-52 h-52"
          style={{ flexBasis: `${gif.width}px` }}
        >
          { !loadedImages.includes(gif.id) &&
               <div className="flex items-center justify-center w-52 h-52">
                <p>Loading</p><img className="mx-4 w-4 h-4" src={loads} alt=".." />
               </div>         
                        }
          <img
            src={gif.image}
            alt={gif.title}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            onLoad={() => handleImageLoad(gif.id)}
          />
          <span className="absolute bottom-1.5 text-white">{gif.title}</span>
        </div>
      ))}
    </div>
  );
};
export default GifContainer;
