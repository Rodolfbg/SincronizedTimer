import { type } from "os";
import React, { Children, useEffect, useState } from "react";
import { isPropertySignature } from "typescript";
import TimerDown from "../spanCrono/spanCrono";
import "./barProgress.css";
import "../../components/spanCrono/CounterView.css";

type props = {
    progressCircle: number,
    min:any,
    sec:any
}



const BarProgress: React.FC<props> = ({ progressCircle, children, min, sec}) => {
    const [porcent, setPorcent] = useState(0)

    useEffect(()=>{
        setPorcent(630 / 100 * progressCircle)
    },[progressCircle])
    return (
        <div id="container">
            {children}
            <div id="counter">
                <span>{min}</span>
                <span>:</span>
                <span>{sec}</span>
            </div>
            <div id="BoxCircle">

                <svg id="circlePro">
                    <circle cy={100} cx={100} r={100}></circle>
                    <circle style={{ strokeDashoffset: porcent }} cy={100} cx={100} r={100}></circle>
                </svg>
            </div>
        </div>
    )
}

export default BarProgress;