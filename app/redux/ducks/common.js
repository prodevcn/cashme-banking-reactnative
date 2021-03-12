import commonSlice from '../../features/common/commonSlice';

// Actions
const {
  fetchStart,
  fetchSuccess,
  fetchError,
  showMessage,
  hideMessage,
} = commonSlice.actions;

export const fetchStartAction = () => async dispatch => {
    dispatch(fetchStart());
};