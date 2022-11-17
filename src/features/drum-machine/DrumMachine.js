import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./drumMachineSlice";
import styles from "./DrumMachine.module.css";

export function DrumMachine() {
    // TODO
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div id="drum-machine" className={styles.drumMachineContainer}>
            <h1>Ultimate Drum Machine</h1>
            <div className={styles.switch}></div>
        </div>
    );
}
