import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a Crew member
interface Core {
  id: string;
  name: string;
  // Add other properties if needed
}

// Define the state type
interface CoreState {
  value: Core[];
}

// Initialize the state
const initialState: CoreState = {
  value: [],
};

const crewsSlice = createSlice({
  name: "cores",
  initialState,
  reducers: {
    getCoress: (state, action: PayloadAction<Core[]>) => {
      state.value = action.payload;
    },
  },
});

export const { getCoress } = crewsSlice.actions;
export default crewsSlice.reducer;
