import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: "idle",
};

export const drumMachineSlice = createSlice({
    name: "drumMachine",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = drumMachineSlice.actions;

// TODO
// export const selectCount = (state) => state.counter.value;

export default drumMachineSlice.reducer;
