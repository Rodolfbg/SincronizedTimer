import React, { useEffect, useState, useRef } from "react";
import BarProgress from "../crono/barProgress";
import InnerData from "../inerData/innerdata";


const CounterDown = 30 * 60;
var timer: any = null;

var minutes = 0
var seconds = 0
const TimerDown: React.FC = () => {

    const [secondDown, setSecondDown] = useState(0);
    const [butIn, setButIn] = useState<boolean>(false);
    const [secondTotal, setSecondTotal] = useState<number>(0);
    const [percentualTimer, setPercentualTimer] = useState<number>(0);
    const [butStop, setButStop] = useState<boolean>(false);
    const [butPause, setButPause] = useState<boolean>(false);

    const ZeroPercentual = (e: string) => {
        if (!e) {
            setSecondDown(0)
            setPercentualTimer(0)
        }
    };

    useEffect(() => {
        minutes = Math.floor(secondDown / 60)
        seconds = secondDown % 60

        if (butPause) {
            setButIn(false)
            setSecondDown(secondDown)
            clearTimeout(timer)
            setButPause(props => !props)
            return
        }

        if (butStop) {
            clearTimeout(timer)
            setButIn(false)
            setSecondDown(secondTotal)
            setPercentualTimer(0)
            setButStop(props => !props)
            return
        }

        if (!butIn) return
        if (secondDown > 0 && butIn && !butPause) {

            timer = setTimeout(() => {
                setSecondDown(state => state - 1);
            }, 1000);
        }
        setPercentualTimer(Math.floor(secondDown / secondTotal * 100))
    }, [secondDown, butIn, butStop, butPause]);


    return (
        <>
            <BarProgress progressCircle={percentualTimer} min={String(Math.floor(secondDown / 60)).padStart(2, '0')} sec={String(secondDown % 60).padStart(2, '0')}>
                <InnerData

                    onChangeInput={(e) => {
                        setSecondDown(parseInt(e.target.value) * 60 || 0);
                        setSecondTotal(parseInt(e.target.value) * 60 || 0);
                        ZeroPercentual(e.target.value);
                    }}
                    onChangeBtnStart={() => { setButIn(true) }}
                    onChangeBtnStop={() => { setButStop(true) }}
                    onChangeBtnPause={() => { setButPause(true) }}
                />
            </BarProgress>
        </>

    )
};

export default TimerDown;