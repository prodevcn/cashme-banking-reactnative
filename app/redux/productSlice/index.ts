import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface IProductState {
  data: Array<number> | undefined;
  loading: boolean;
  error: object | undefined;
}

const initialState: IProductState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productFetchStart: state => {
      state.loading = true;
    },
    productFetchSuccess: (state, action: PayloadAction<Array<number>>) => {
      state.loading = false;
      state.data = action.payload;
    },
    productFetchFailure: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Actions
const { productFetchSuccess, productFetchFailure, productFetchStart } =
  productSlice.actions;

export const getProducts = (): AppThunk => async dispatch => {
  try {
    dispatch(productFetchStart());
    // TODO: Uncomment when api is ready
    //const products = await api.get<Array<number>>("/api/products");
    //dispatch(productFetchSuccess(products.data));

    // Just for test
    const data = [1, 2, 3, 4];

    dispatch(productFetchSuccess(data));

    return data;
  } catch (e) {
    dispatch(productFetchFailure(e.message));
  }
};

export default productSlice;
