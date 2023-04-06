import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const key = 'lQZi7T3Wy75fepmP3GdfH3zsNpDGDa8l'


interface GifState {
  gifs: {
    id: string;
    title: string;
    width: number;
    image: string;
  }[];
  loading: boolean;
  error: null | string;
}


export const fetchGifs = createAsyncThunk('gif/fetchData', async (count: number) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${count}&rating=g`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
      },
  });
  const data = await response.json();
  const refinedData = data.data.map((gif: { id: string; title: string; images: { original: { width: number; url: string; }; }; }) => ({
    id: gif.id,
    title: gif.title,
    width: gif.images.original.width,
    image: gif.images.original.url
  }))
  return refinedData;
})


const gifSlice = createSlice({
    name: 'gifs',
    initialState: {
        gifs: [],
        loading: false,
        error: null,
    } as GifState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchGifs.pending, (state) => ({
            ...state,
            loading: true,
            error: null,
          }))
          .addCase(fetchGifs.fulfilled, (state, action) => ({
            ...state,
            gifs: action.payload,
            loading: false,
            error: null
          }));
    },
});

export default gifSlice.reducer;