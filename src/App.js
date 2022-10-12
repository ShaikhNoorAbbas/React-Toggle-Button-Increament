import "./App.css";
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
const App = () => {
    const [counter, setCounter] = useState(0);
    const [allowButton, setAllow] = useState(false);
    const plusHandler = useCallback(() => {
        if (allowButton) {
            setCounter((prevCounter) => {
                return prevCounter + 1;

            });
            setCounter((prevCounter) => {
                return prevCounter + 1;
            });

        }
        else {
            alert("Please Allow Button To Increament");
        }
    }, [allowButton])
    useEffect(() => {
        document.title = `Counter Value: ${counter}`
        return () => { console.log("I Run First") }
    }, [counter]);
    const allowHandler = () => {
        setAllow((preallow) => { return !preallow });
    };
    return (
        <React.Fragment>
            <div className="container">
                <h1>{counter}</h1>
                <button onClick={plusHandler}>Click + 1</button>
                <button onClick={allowHandler}>{allowButton && <span>Disable From Increament</span> || <span>Allow Button to Increament</span>}</button>
            </div>
        </React.Fragment>
    );
};
export default App;