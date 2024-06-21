import React from "react";
const Navbar=()=>{
    return(
        <>
       <div className="navbar-cont flex  w-screen ">
        <div className="left-cont flex justify-between w-[20rem]">
        <div className="logo-cont flex justify-center">

            <img src="/images/logo.svg " className="w-9" alt="not found"/>
            <p className="mt-3 text-[#96969D]"><b>Vite</b></p>
        </div>
            <div className="search-box flex justify-between w-[13rem] mt-[1rem] bg-[#161618]">
            <i class="fa-solid fa-magnifying-glass mt-[0.4rem] ml-[0.5rem] absolute left-[9%] icon"></i>
                <input type="text" placeholder="Search" className="bg-transparent border-[1.5px] border-[#96969D] w-[8rem] mr-4 "></input>
                <button className="border-[1.5px] border-[#96969D] text-[#96969D] w-[65px]">Ctrl K</button>
            </div>
        </div>
        <div className="center-cont flex justify-center  w-[30rem] ml-[10rem]">
        <li>Guide</li>
        <li>Config</li>
        <li>Plugins</li>
        <li>Resources</li>
        <li>Version</li>
        </div>
        <div className="right-cont flex justify-evenly w-[20rem]">
            <div className="moon bg-[#96969D] ">
            <i class="fa-solid fa-moon moon-icon"></i>
            </div>
            <div className="rest-icons flex justify-evenly m-4  w-[10rem]">
            <i class="fa-brands fa-mastodon"></i>
            <i class="fa-solid fa-x"></i>
            <i class="fa-brands fa-discord"></i>

            </div>
        </div>
       </div>
        </>

    )
};
export default Navbar;