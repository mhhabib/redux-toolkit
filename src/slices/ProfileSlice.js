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
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    }
  },
});

export default profileSlice.reducer;
export const { setName, setGender, setDepartment } = profileSlice.actions;