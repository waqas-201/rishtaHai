// store/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  currentStep: number;
  personalInfo: { name: string };
  addressInfo: { city: string };
}

const initialState: FormState = {
  currentStep: 0,
  personalInfo: { name: "" },
  addressInfo: { city: "" },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setPersonalInfo(state, action: PayloadAction<{ name: string }>) {
      state.personalInfo = action.payload;
    },
    setAddressInfo(state, action: PayloadAction<{ city: string }>) {
      state.addressInfo = action.payload;
    },
    resetForm(state) {
      state.currentStep = 0;
      state.personalInfo = { name: "" };
      state.addressInfo = { city: "" };
    },
  },
});

export const { setCurrentStep, setPersonalInfo, setAddressInfo, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
