import { createSlice } from "@reduxjs/toolkit";
import { property } from "../data/dummyData";


const initialState = {
  currentDataItems: property || [],  // Holds all properties
  selectedProperty: null,            // This will hold the clicked property
  loading: true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getCurrentItems: (state, action) => {
      state.currentDataItems = action.payload;
    },

    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;  // Updates selected property when a user clicks
    },

    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default dataSlice.reducer;

export const { getCurrentItems, setSelectedProperty, setIsLoading } = dataSlice.actions;

export const dataStore = (state) => state.data;
