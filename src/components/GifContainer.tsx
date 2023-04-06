import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/configureStore";
import { fetchGifs } from "../redux/gif";



const GifContainer = () => {
    const gifArray = useSelector((state: RootState) => state.gifs.gifs)
    const dispatch = useDispatch<AppDispatch>()
    console.log(gifArray);

 useEffect(() => {
    dispatch(fetchGifs());
 }, [dispatch])

  
  return (
    <div className="flex flex-wrap gap-4 m-11">
      {gifArray.map((gif) => (
        <div
          key={gif.id}
          className="relative flex-grow"
          style={{ flexBasis: `${gif.width}px` }}
        >
          <img
            src={gif.image}
            alt={gif.title}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <span className="absolute bottom-1.5">{gif.title}</span>
        </div>
      ))}
    </div>
  );
};
export default GifContainer;
