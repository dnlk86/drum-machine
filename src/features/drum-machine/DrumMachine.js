import React from "react";
import { useSelector } from "react-redux";
import { showSelected } from "./drumMachineSlice";
import styles from "./DrumMachine.module.css";
import Display from "./Display";
import Button from "./Button";

export function DrumMachine() {
    const selected = useSelector(showSelected);

    const drumPadButtons = [
        {
            id: "btnQ",
            value: "Q",
            text: "Q",
            display: "Heater 1",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF0000",
            c_bgColor: "#FFC8C8",
            c_color: "#FF0000",
        },
        {
            id: "btnW",
            value: "W",
            text: "W",
            display: "Heater 2",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FF8700",
            c_bgColor: "#FFE5C8",
            c_color: "#FF8700",
        },
        {
            id: "btnE",
            value: "E",
            text: "E",
            display: "Heater 3",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #FFD300",
            c_bgColor: "#FFF6C8",
            c_color: "#FFD300",
        },
        {
            id: "btnA",
            value: "A",
            text: "A",
            display: "Heater 4",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #DEFF0A",
            c_bgColor: "#F8FFCB",
            c_color: "#DEFF0A",
        },
        {
            id: "btnS",
            value: "S",
            text: "S",
            display: "Clap",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #A1FF0A",
            c_bgColor: "#EBFFCB",
            c_color: "#A1FF0A",
        },
        {
            id: "btnD",
            value: "D",
            text: "D",
            display: "Open HH",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #0AFF99",
            c_bgColor: "#CBFFE9",
            c_color: "#0AFF99",
        },
        {
            id: "btnZ",
            value: "Z",
            text: "Z",
            display: "Kick n' Hat",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #0AEFFF",
            c_bgColor: "#CBFCFF",
            c_color: "#0AEFFF",
        },
        {
            id: "btnX",
            value: "X",
            text: "X",
            display: "Kick",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #147DF5",
            c_bgColor: "#CDE3FD",
            c_color: "#147DF5",
        },
        {
            id: "btnC",
            value: "C",
            text: "C",
            display: "Closed HH",
            clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            border: "3px solid #FFF",
            bgColor: "grey",
            color: "#FFF",
            c_border: "3px solid #580AFF",
            c_bgColor: "#DBCBFF",
            c_color: "#580AFF",
        },
    ];

    return (
        <div id="drum-machine" className={styles.drumMachineContainer}>
            <h1>Ultimate Drum Machine</h1>
            <Display selected={selected} />
            <div>
                <div className={styles.padsGrid}>
                    {drumPadButtons.map((v) => (
                        <Button btn={v} />
                    ))}
                </div>
            </div>
        </div>
    );
}
