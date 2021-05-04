import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface ICategoryState {
  data: Array<number> | undefined;
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
    categoryFetchSuccess: (state, action: PayloadAction<Array<number>>) => {
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
const {
  categoryFetchSuccess,
  categoryFetchFailure,
  categoryFetchStart,
} = categorySlice.actions;

export const getCategories = (): AppThunk => async dispatch => {
  try {
    dispatch(categoryFetchStart());
    // TODO: Uncomment when api is ready
    //const categories = await api.get<Array<number>>("/api/categories");
    //dispatch(categoryFetchSuccess(categories.data));

    // Just for test
    const data = [1, 2, 3, 4, 5, 6];

    dispatch(categoryFetchSuccess(data));
  } catch (e) {
    dispatch(categoryFetchFailure(e));
  }
};

export default categorySlice;
