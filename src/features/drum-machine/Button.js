import React from "react";
// import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { select } from "./drumMachineSlice";

export default function Button(props) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        let btn = document.getElementById(e.target.id);
        document.getElementById(btn.innerText).play();
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
            <audio
                id={props.btn.text}
                className="clip"
                src={props.btn.clip}
                preload="auto"
            ></audio>
            <button
                id={props.btn.id}
                className="drum-pad"
                value={props.btn.value}
                onClick={handleClick}
            >
                {props.btn.text}
            </button>
        </div>
    );
}
