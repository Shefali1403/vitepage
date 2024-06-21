import React from "react";
import Card from "./Card";
import ndata from "./Carddata";
const Main=()=>{
    return(
        <>
        <div className="main-cont flex flex-col mt-[4rem]">
            <div className="main-part1 grid grid-cols-2">
                <div className="main-writeup flex flex-col ml-6">
                    <h1 className="text-[#A94EFE]">Vite</h1>
                    <h1 className="text-[#DFDFD6]">Next Generation</h1>
                    <h1 className="text-[#DFDFD6]">FrontEnd Tooling</h1>
                    <p className="text-[1.5rem]">Get ready for a development environment that can</p>
                    <p className="text-[1.5rem]">finally catch up with you.</p>
                    <div className="main-buttons flex justify-between mt-6 mr-[4rem] m-3 ">
                        <button className=" h-[8vh] w-[17vw] bg-[#747BFF]">Get Started</button>
                        <button className=" h-[8vh] w-[17vw] ml-[1rem] bg-[#414853] ">Why Vite?</button>
                        <button className=" h-[8vh] w-[20vw] ml-[1rem]  text-[1rem] bg-[#414853]">View on Github</button>
                        <button className=" h-[8vh] w-[25vw] ml-[1rem] text-[1rem] bg-[#747BFF] ">🎉 ViteConf 23!</button>
                    </div>
                </div>
                
                <div className="main-logo">
                <div className="logo-box  absolute w-[10vw] h-[20vh] "></div>
                    <img src="/images/logo.svg" className="ml-[10rem] w-[20vw] mt-[4rem]" alt="not found"/>
                </div>
            </div>
            <div className="main-part2  mt-9">
                {ndata.map((val)=>{
                    return(
                        <Card emoji={val.emoji}
                            title={val.title}
                            para={val.para}
                        />
                    )
                })}
            </div>
        </div>

        </>

    )
};
export default Main;