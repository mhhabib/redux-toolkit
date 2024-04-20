import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  education: '',
  experience: '',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfig: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    }
  },
});

export default configSlice.reducer;
export const { updateConfig } = configSlice.actions;