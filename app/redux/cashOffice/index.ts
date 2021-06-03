import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { AppThunk } from "../../store";

export interface IOfficeSchedule {
  id: number;
  weekDay: string | number;
  openTime: string | null;
  closeTime: string | null;
}

interface IOfficeType {
  id: number;
  name: string;
}

export interface IOffice {
  id: number;
  address: string;
  latitude: string | number;
  longitude: string | number;
  cashOfficeSchedules: IOfficeSchedule[];
  cashOfficeType: IOfficeType;
}

interface ICashOfficeState {
  data?: IOffice[];
  loading: boolean;
  error?: object;
}

const initialState: ICashOfficeState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const cashOfficeSlice = createSlice({
  name: "cashOffice",
  initialState,
  reducers: {
    fetchStarted: state => {
      state.loading = true;
      state.error = undefined;
    },
    fetchFailed: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },

    cashOfficesFulfilled: (
      state,
      action: PayloadAction<IOffice[] | undefined>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

const {
  fetchStarted,
  fetchFailed,

  cashOfficesFulfilled,
} = cashOfficeSlice.actions;

export const getCashOffices = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchStarted());

    const { data = {} }: any = await api.get("/api/cash-offices");

    dispatch(cashOfficesFulfilled(data.data));

    return data.data;
  } catch (e) {
    dispatch(fetchFailed(e.message));

    return e;
  }
};

export default cashOfficeSlice;
