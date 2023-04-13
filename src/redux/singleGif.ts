import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const key = 'lQZi7T3Wy75fepmP3GdfH3zsNpDGDa8l'

interface GifState {
    gif: {
      id: string;
      title: string;
      width: number;
      image: string;
    }[];
    loading: boolean;
    error: null | string;
  }
  