// store/formSlice.ts
import { personalInfoSchema } from "@/components/multistep/accountSetup1";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";

interface FormState {
  currentStep: number;
  personalInfo: z.infer<typeof personalInfoSchema>;
  addressInfo: { city: string };
}

const initialState: FormState = {
  currentStep: 0,
  personalInfo: {
    profileFor: "",
    gender: "male",
    GroomName: "",
    phone: "",
    termsAccepted: false,
  },
  addressInfo: { city: "" },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setPersonalInfo(
      state,
      action: PayloadAction<z.infer<typeof personalInfoSchema>>
    ) {
      state.personalInfo = action.payload;
    },
    setAddressInfo(state, action: PayloadAction<{ city: string }>) {
      state.addressInfo = action.payload;
    },
    resetForm(state) {
      state.currentStep = 0;
      state.personalInfo = {
        profileFor: "",
        gender: "male",
        GroomName: "",
        phone: "",
        termsAccepted: false,
      };
      state.addressInfo = { city: "" };
    },
  },
});

export const { setCurrentStep, setPersonalInfo, setAddressInfo, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
