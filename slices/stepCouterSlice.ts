// store/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stepCounterState {
  currentStep: number;
}

const initialState: stepCounterState = {
  currentStep: 0,
};

const stepCounter = createSlice({
  name: "stepCounter",
  initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = stepCounter.actions;
export default stepCounter.reducer;
