import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: true,
    selectedDrumPad: "",
};

export const drumMachineSlice = createSlice({
    name: "drumMachine",
    initialState,
    reducers: {
        select: (state, action) => {
            if (state.active) {
                state.selectedDrumPad = action.payload;
                // setTimeout(() => (state.selectedDrumPad = ""), 500);     // timeout function doesn't work here, I moved it in the handleClick
            }
        },
    },
});

export const { select } = drumMachineSlice.actions;

export const showSelected = (state) => state.drumMachine.selectedDrumPad;

export default drumMachineSlice.reducer;
