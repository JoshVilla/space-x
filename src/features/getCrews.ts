import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a Crew member
interface Crew {
  id: string;
  name: string;
  // Add other properties if needed
}

// Define the state type
interface CrewState {
  value: Crew[];
}

// Initialize the state
const initialState: CrewState = {
  value: [],
};

const crewsSlice = createSlice({
  name: "crews",
  initialState,
  reducers: {
    getCrews: (state, action: PayloadAction<Crew[]>) => {
      state.value = action.payload;
    },
  },
});

export const { getCrews } = crewsSlice.actions;
export default crewsSlice.reducer;
