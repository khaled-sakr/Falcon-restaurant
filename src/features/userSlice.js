import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  table: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
    updateTable(state, action) {
      state.table = action.payload;
    },
    clearDataUser(state) {
      state.userName = "";
      state.table = "";
    },
  },
});
////// if you import fetched data you can use extraReducers()
////////
export const { updateName, updateTable, clearDataUser } = userSlice.actions;

export default userSlice.reducer;
