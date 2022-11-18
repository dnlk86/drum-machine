import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { select, showSelected } from "./drumMachineSlice";
import styles from "./DrumMachine.module.css";
import Display from "./Display";

export function DrumMachine() {
    // TODO
    const selected = useSelector(showSelected);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        let btn = document.getElementById(e.target.id);
        dispatch(select(e.target.value));
        btn.style.border = "3px solid #FF0000";
        btn.style.backgroundColor = "#FF8080";
        btn.style.color = "#FF0000";
        setTimeout(() => {
            dispatch(select(""));
            btn.style.border = "3px solid #FFF";
            btn.style.backgroundColor = "grey";
            btn.style.color = "#FFF";
        }, 500);
    };

    return (
        <div id="drum-machine" className={styles.drumMachineContainer}>
            <h1>Ultimate Drum Machine</h1>
            <div className={styles.switch}></div>
            <Display selected={selected} />
            <button
                id="button1"
                value={"I'm button #1"}
                onClick={handleClick}
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "grey",
                    border: "3px solid #FFF",
                    borderRadius: "5px",
                    fontSize: "1.5rem",
                    color: "#FFF",
                }}
            >
                BTN1
            </button>
        </div>
    );
}
