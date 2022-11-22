import React, { useEffect } from "react";
import { DrumMachine } from "./features/drum-machine/DrumMachine";
import "./App.css";

function App() {
    const handleKeyDown = (e) => {
        document.getElementById("btn" + e.key.toUpperCase()).click();
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="App">
            <DrumMachine />
            <div id="signatureContainer">
                <a
                    href="https://github.com/dnlk86/drum-machine"
                    target={"_blank"}
                >
                    dnlk86
                </a>
            </div>
        </div>
    );
}

export default App;
