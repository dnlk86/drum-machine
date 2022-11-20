import React from "react";
import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { select } from "./drumMachineSlice";

export default function Button(props) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        let btn = document.getElementById(e.target.id);
        dispatch(select(e.target.value));
        btn.style.border = props.btn.c_border;
        btn.style.backgroundColor = props.btn.c_bgColor;
        btn.style.color = props.btn.c_color;
        setTimeout(() => {
            dispatch(select(""));
            btn.style.border = props.btn.border;
            btn.style.backgroundColor = props.btn.bgColor;
            btn.style.color = props.btn.color;
        }, 500);
    };

    return (
        <div>
            <button
                id={props.btn.id}
                className={styles.myButton}
                value={props.btn.value}
                onClick={handleClick}
            >
                {props.btn.text}
            </button>
        </div>
    );
}
