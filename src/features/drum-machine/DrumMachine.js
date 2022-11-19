import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { select, showSelected } from "./drumMachineSlice";
import styles from "./DrumMachine.module.css";
import Display from "./Display";
import Button from "./Button";

export function DrumMachine() {
    const selected = useSelector(showSelected);
    const dispatch = useDispatch();

    return (
        <div id="drum-machine" className={styles.drumMachineContainer}>
            <h1>Ultimate Drum Machine</h1>
            <div className={styles.switch}></div>
            <Display selected={selected} />
            <Button />
        </div>
    );
}
