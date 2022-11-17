import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./drumMachineSlice";
import styles from "./DrumMachine.module.css";

export function DrumMachine() {
    // TODO
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return <div className={styles.drumMachineContainer}></div>;
}
