import React from "react";
const Card=(props)=>{
    return(
        <>
            <div className="card flex flex-col justify-evenly  p-[2rem] w-[30vw] ">
            <div className="card-icon">{props.emoji}</div>
            <p><b>{props.title}</b></p>
            <p className="text-[#9A9AA3]">{props.para}</p>

            </div>
        </>
    )
};
export default Card;