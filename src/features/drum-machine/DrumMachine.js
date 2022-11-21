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
            id: "btnQ",
            value: "Q",
            text: "Q",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnW",
            value: "W",
            text: "W",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnE",
            value: "E",
            text: "E",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnA",
            value: "A",
            text: "A",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnS",
            value: "S",
            text: "S",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnD",
            value: "D",
            text: "D",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnZ",
            value: "Z",
            text: "Z",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnX",
            value: "X",
            text: "X",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FF8080",
            c_color: "#FF0000",
        },
        {
            id: "btnC",
            value: "C",
            text: "C",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
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
            <div className={styles.padsGrid}>
                {drumPadButtons.map((v) => (
                    <Button btn={v} />
                ))}
            </div>
        </div>
    );
}
