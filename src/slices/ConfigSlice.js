import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  education: '',
  experience: '',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { setEducation, setExperience } = configSlice.actions;