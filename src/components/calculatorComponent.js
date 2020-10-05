import React, { useState, useEffect } from 'react';

const startEquation = (equation, setEquation) => {
    if (equation === "Start your equation") setEquation(0)
}

const getResult = (equation, setEquation) => {
    setEquation(eval(equation))
}

const Calculator = () => {
    const [equation, setEquation] = useState("");

    return(
        <div className="" style={{marginTop: "20%"}}>
            <table className="table table-bordered" style={styles.table}>
                <tr>
                    <td className="text-left" colspan="4" style={styles.result}> {equation} </td>
                </tr>
                <tr>
                    <td style={styles.number} onClick={() => {setEquation(equation + 1)}}>1</td>
                    <td style={styles.number} onClick={() => {setEquation(equation + 2)}}>2</td>
                    <td style={styles.number} onClick={() => {setEquation(equation + 3)}}>3</td>
                    <td style={styles.action} onClick={() => {setEquation(equation + " + ")}}>+</td>
                </tr>
                <tr>
                    <td style={styles.number} onClick={() => {setEquation(equation + 4)}}>4</td>
                    <td style={styles.number} onClick={() => {setEquation(equation + 5)}}>5</td>
                    <td style={styles.number} onClick={() => {setEquation(equation + 6)}}>6</td>
                    <td style={styles.action} onClick={() => {setEquation(equation + " - ")}}>-</td>
                </tr>
                <tr>
                    <td style={styles.number} onClick={() => {setEquation(equation + 7)}}>7</td>
                    <td style={styles.number} onClick={() => {setEquation(equation + 8)}}>8</td>
                    <td style={styles.number} onClick={() => {setEquation(equation + 9)}}>9</td>
                    <td style={styles.action} onClick={() => {setEquation(equation + " * ")}}>*</td>
                </tr>
                <tr>
                    <td style={styles.number} onClick={() => {setEquation(equation + 0)}}>0</td>
                    <td style={styles.number} onClick={() => {getResult(equation, setEquation)}}>=</td>
                    <td style={styles.number} onClick={() => {setEquation("")}}>C</td>
                    <td style={styles.action} onClick={() => {setEquation(equation + " / ")}}>/</td>
                </tr>
            </table>
        </div>
    )
}

const styles = {
    table: {
        margin: "auto",
        border: 1,
        borderColor: "black",
        width: "60%"
    },
    result: {
        boder: 3,
        borderColor: "black",
        fontWeight: 480
    },
    number: {
        boder: 3,
        borderColor: "black",
        backgroundColor: "#E1E1E1"
    },
    action: {
        boder: 3,
        borderColor: "black",
        backgroundColor: "orange"
    }
}

export default Calculator