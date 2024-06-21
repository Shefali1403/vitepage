import React from "react";
const Main2=()=>{
    return(
        <>
        <div className="main2-cont flex flex-col mt-[4rem] w-full ">
            <div className="main2-heading flex flex-col justify-center absolute left-[41%]">
            <i class="fa-regular fa-heart main2-icon fa-2x"></i>
            <p className="mt-3 text-lg text-[#9A9AA3]">Vite is free and open source,made</p>
            <p className="text-[#9A9AA3]">possible by wonderful sponsers.</p>
            </div>
            <div className="main2-box flex flex-col mt-[10rem] w-[80%] ml-[8rem] bg-[#202127]">
            <p className="text-center text-[#9A9AA3] mt-4 ">Special Sponsers</p>
                <div className="main2-box1 border-[1px] border-black w-full">
                    <div className="box1-card1 border-[1px]  border-black flex justify-center items-center ">
                        <h1 className="text-lg"><b>⚡ StackBlitz</b></h1>
                   </div>
                    <div className="box1-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>🥋 Labs</b></h1>
                    </div>
                    <div className="box1-card3 border-[1px] border-black  flex justify-center items-center">
                        <h1 className="text-lg"><b>🚀Astro</b></h1>
                    </div>
                </div>
                <p className="text-center text-[#9A9AA3] mt-4 ">Platinum Sponsers</p>
                <div className="main2-box2 border-[1px] border-black w-full ">
                <div className="box2-card1 border-[1px] border-black flex justify-center  items-center ">
                        <h1 className="text-lg"><b>⚡ StoryBlok</b></h1>
                   </div>
                    <div className="box2-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>🥋 bits</b></h1>
                    </div>
                </div>
                <p className="text-center text-[#9A9AA3] mt-4 ">Gold Sponsers</p>
               <div className="main2-box3 border-[1px] border-black w-full">
               <div className="box3-card1 border-[1px] border-black flex justify-center items-center ">
                        <h1 className="text-lg"><b>⚡ Tailwind Labs</b></h1>
                   </div>
                    <div className="box3-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>🥋 Riots</b></h1>
                    </div>
                    <div className="box3-card1 border-[1px] border-black flex justify-center items-center ">
                        <h1 className="text-lg"><b> Perfect</b></h1>
                   </div>
                    <div className="box3-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>🥋Jet Brains</b></h1>
                    </div>
                    <div className="box3-card1 border-[1px] border-black flex justify-center items-center ">
                        <h1 className="text-lg"><b>⚡MUX</b></h1>
                   </div>
                    <div className="box3-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>Remix</b></h1>
                    </div>
                    <div className="box3-card1 border-[1px] border-black flex justify-center items-center ">
                        <h1 className="text-lg"><b>Nx</b></h1>
                   </div>
                    <div className="box3-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>🥋Huly</b></h1>
                    </div>
                    <div className="box3-card1 border-[1px] border-black flex justify-center items-center ">
                        <h1 className="text-lg"><b> StoryBlok</b></h1>
                   </div>
                    <div className="box3-card2 border-[1px] border-black flex justify-center items-center">
                        <h1 className="text-lg"><b>Handstonable</b></h1>
                    </div>
               </div>
            </div>
            <div className="main2-buttons flex justify-center items-center mt-[7rem] ">
                <button className="border-[1px] border-[#9A9AA3] p-3 text-[#9A9AA3]">Sponser Vite</button>
                <button className="border-[1px] border-[#9A9AA3] p-3 ml-5 text-[#9A9AA3]">Sponser Evan You</button>
            </div>
        </div>

        </>

    )
};
export default Main2;