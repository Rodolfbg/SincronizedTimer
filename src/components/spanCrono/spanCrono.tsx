import React, { useEffect, useState } from "react";
import BarProgress from "../crono/barProgress";
import InnerData from "../inerData/innerdata";


const CounterDown = 30 * 60;

const TimerDown: React.FC = () => {

    const [secondDown, setSecondDown] = useState(0);
    const [minuteDown, setMinute] = useState(0);
    const [butIn, setButIn] = useState<boolean>(false);
    const[percentualTimer,setPercentualTimer] = useState(secondDown * 100 / secondDown)



    useEffect(() => {
        if (!butIn) return
        if (secondDown > 0) {

            setTimeout(() => {
                setSecondDown(state => state - 1);

            }, 1000);
        }

    }, [secondDown, butIn]);

    const minutes = Math.floor(secondDown / 60);
    const seconds = secondDown % 60;

    return (
        <>
            <BarProgress progressCircle={percentualTimer} min={String(minutes).padStart(2, '0')} sec={String(seconds).padStart(2, '0')}>
                <InnerData
                    onChangeInput={(e) => { setSecondDown(parseInt(e.target.value) * 60) }}
                    onChangeBtnStart={() => { setButIn(true) }}
                />
            </BarProgress>
        </>

    )
};

export default TimerDown;