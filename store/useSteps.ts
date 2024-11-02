import { create } from "zustand";


 export interface StoreState {
   open: boolean;
   setOpen: (open: boolean) => void;
 }

 export const useStore = create<StoreState>((set) => ({
   open: false,
   setOpen: (open: boolean) => set({ open }), // Update the open state based on the provided value
 }));
