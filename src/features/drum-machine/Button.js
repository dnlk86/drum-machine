import React from "react";
// import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { select } from "./drumMachineSlice";

export default function Button() {
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
        <div>
            <button
                id="button1"
                // className={styles.myButton}
                value={"I'm button #1"}
                onClick={handleClick}
            >
                BTN1
            </button>
        </div>
    );
}
