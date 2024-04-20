import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  gender: '',
  department: ''
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    }
  },
});

export default profileSlice.reducer;
export const { updateProfile } = profileSlice.actions;