import React from "react";
// import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { select } from "./drumMachineSlice";

export default function Button(props) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        let btn = document.getElementById(e.target.id);
        document.getElementById(btn.innerText).play();
        document.body.style.backgroundImage = `radial-gradient(${props.btn.c_bgColor}, #181818)`;
        dispatch(select(props.btn.display));
        btn.style.border = props.btn.c_border;
        btn.style.backgroundColor = props.btn.c_bgColor;
        btn.style.color = props.btn.c_color;
        setTimeout(() => {
            dispatch(select(""));
            document.body.style.backgroundImage =
                "radial-gradient(silver, #181818)";
            btn.style.border = props.btn.border;
            btn.style.backgroundColor = props.btn.bgColor;
            btn.style.color = props.btn.color;
        }, 200);
    };

    return (
        <div>
            <button
                id={props.btn.id}
                className="drum-pad"
                value={props.btn.value}
                onClick={handleClick}
            >
                <audio
                    id={props.btn.text}
                    className="clip"
                    src={props.btn.clip}
                    preload="auto"
                ></audio>
                {props.btn.text}
            </button>
        </div>
    );
}
