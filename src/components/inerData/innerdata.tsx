import React from "react";
import "../inerData/innerdata.css"


type props ={
    onChangeInput?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    onChangeBtnStart?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    onChangeBtnPause?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    onChangeBtnStop?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    

}


const InnerData:React.FC<props> =  ({ onChangeInput , onChangeBtnPause,onChangeBtnStart,onChangeBtnStop})=>{

    return(
        <div id="inners">
            <input onChange={onChangeInput} id="setcount" type="text" placeholder="Set your timer" />
            <div id="but">
                <button onClick={onChangeBtnStart} id="primarybut">START</button>
                <button onClick={onChangeBtnPause} id="secondbut">PAUSE</button>
                <button onClick={onChangeBtnStop} id="lastbut">STOP</button>
            </div>

        </div>
    )
};

export default InnerData;