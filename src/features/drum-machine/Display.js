import React from "react";
// import { showSelected } from "./drumMachineSlice";
import styles from "./Display.module.css";

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="display" className={styles.display}>
                <p>{this.props.selected}</p>
            </div>
        );
    }
}

export default Display;
