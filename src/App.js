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
    const minusHandler = useCallback(() => {
        if (allowButton) {
            setCounter((prevCounter) => { return prevCounter - 1 });
        }
        else {
            alert("Please Allow Buttons To Increament");
        }
    }, [allowButton]);
    const resetHandler = useCallback(() => {
        allowButton ? setCounter(0) : alert("Please Allow Buttons to Work");
    }, [allowButton]);
    return (
        <React.Fragment>
            <div className="container">
                <h1>{counter}</h1>
                <button onClick={plusHandler}>Click + 1</button>
                <button onClick={minusHandler}>Click - 1</button>
                <br />
                <button onClick={allowHandler}>{(allowButton && <span>Disable Button</span>) || <span>Allow Button</span>}</button>
                <button onClick={resetHandler}>Reset to 0</button>
            </div>
        </React.Fragment>
    );
};
export default App;