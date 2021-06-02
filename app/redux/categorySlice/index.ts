import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface ICategoryData {
  id: number;
  slug: string;
}

interface ICategoryState {
  data: Array<ICategoryData> | undefined;
  loading: boolean;
  error: object | undefined;
}

const initialState: ICategoryState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryFetchStart: state => {
      state.loading = true;
    },
    categoryFetchSuccess: (
      state,
      action: PayloadAction<Array<ICategoryData>>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    categoryFetchFailure: (
      state,
      action: PayloadAction<object | undefined>,
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Actions
const { categoryFetchSuccess, categoryFetchFailure, categoryFetchStart } =
  categorySlice.actions;

export const getCategories = (): AppThunk => async dispatch => {
  try {
    dispatch(categoryFetchStart());

    const res = await (await api.get("/api/categories")).data;
    const categories: Array<ICategoryData> = res.data.categories;

    dispatch(categoryFetchSuccess(categories));

    return categories;
  } catch (e) {
    dispatch(categoryFetchFailure(e.message));
  }
};

export default categorySlice;
