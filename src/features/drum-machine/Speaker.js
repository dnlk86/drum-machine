import React from "react";
import styles from "./Speaker.module.css";

export default function Speaker() {
    return (
        <div className={styles.speaker}>
            <div className={styles.speakerRow}></div>
            <div className={styles.speakerRow}></div>
            <div className={styles.speakerRow}></div>
            <div className={styles.speakerRow}></div>
            <div className={styles.speakerRow}></div>
        </div>
    );
}
