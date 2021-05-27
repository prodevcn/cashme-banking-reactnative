import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import api from "../../util/api";

interface Details {
  minAmount: string | undefined;
  maxAmount: string | undefined;
  amountStep: string | undefined;
  monthlyPaymentStep: string | undefined;
  minMonths: string | undefined;
  maxMonths: string | undefined;
  annualRate: string | undefined;
  penaltyBaseAmount: string | undefined;
  penaltyPercentageAmount: string | undefined;
  nightStart: string | undefined;
  nightEnd: string | undefined;
  fallbackTransfer: string | undefined;
  interestRate: string | undefined;
  withdrawalFeeRate: string | undefined;
  serviceFeeRate: string | undefined;
  confirmationFlow: string | undefined;
  autoconfirmationFlow: string | undefined;
}

interface Data {
  details: Details | undefined;
}

interface ICashMeState {
  data: Data | undefined;
  loading: boolean;
  error: object | undefined;
}

const initialState: ICashMeState = {
  data: undefined,
  loading: false,
  error: undefined,
};

const cashMeSlice = createSlice({
  name: "cashMe",
  initialState,
  reducers: {
    cashMeFetchStart: state => {
      state.loading = true;
    },
    cashMeFetchSuccess: (state, action: PayloadAction<Data | undefined>) => {
      state.loading = false;
      state.data = action.payload;
    },
    cashMeFetchFailure: (state, action: PayloadAction<object | undefined>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Actions
const { cashMeFetchSuccess, cashMeFetchFailure, cashMeFetchStart } =
  cashMeSlice.actions;

export const getCashMeInfo = (): AppThunk => async dispatch => {
  try {
    dispatch(cashMeFetchStart());

    const cashMe: ICashMeState = await (await api.get("/api/products/1")).data;

    dispatch(cashMeFetchSuccess(cashMe.data));

    return cashMe.data;
  } catch (e) {
    dispatch(cashMeFetchFailure(e.message));
  }
};

export default cashMeSlice;
