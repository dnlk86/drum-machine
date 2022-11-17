import { configureStore } from "@reduxjs/toolkit";
import drumMachineReducer from "../features/drum-machine/drumMachineSlice";

export const store = configureStore({
    reducer: {
        drumMachine: drumMachineReducer,
    },
});
