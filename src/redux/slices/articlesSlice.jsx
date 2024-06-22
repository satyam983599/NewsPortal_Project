import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '843da6a99f24485191eb72c7b76508bd';
const apiUrl = `https://newsapi.org/v2/everything`;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page = 1 }) => {
    const response = await axios.get(apiUrl, {
      params: {
        apiKey,
        category,
        country: 'in',
        page,
      },
    });
    return { articles: response.data.articles, totalResults: response.data.totalResults };
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    totalResults: 0,
    currentPage: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = articlesSlice.actions;

export default articlesSlice.reducer;
