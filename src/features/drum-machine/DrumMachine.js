import React from "react";
import { useSelector } from "react-redux";
import { showSelected } from "./drumMachineSlice";
import styles from "./DrumMachine.module.css";
import Display from "./Display";
import Button from "./Button";

export function DrumMachine() {
    const selected = useSelector(showSelected);
    // const dispatch = useDispatch();

    const drumPadButtons = [
        {
            id: "button1",
            value: "#1 YOOOO!!!",
            text: "YOOOO",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
    ];

    return (
        <div id="drum-machine" className={styles.drumMachineContainer}>
            <h1>Ultimate Drum Machine</h1>
            <div className={styles.switch}></div>
            <Display selected={selected} />
            {drumPadButtons.map((v) => (
                <Button btn={v} />
            ))}
        </div>
    );
}
