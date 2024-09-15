import React, { useEffect } from "react";
// import stethoscope from "../../stethoscope.png";

export default function RS_label(props:any){
    return(
        <div className="px-23 font-sans flex justify-center items-center shadow-lg pt-2 flex-col mx-6 my-3 max-w-screen-lg h-50 w-96 bg-white rounded-xl hover:shadow-2xl hover:scale-105 duration-300 ease-in-out transition-all">
            <h1 className="flex justify-end text-center font-bold text-lg"> {props.rumahSakit}</h1>
            <p className="flex justify-end text-gray-600">🩺 {props.specialis}</p>
            <div className="flex w-[80%] text-gray-600 pb-1">
                <img src="icon-distance-removebg-preview (1).png" className=" w-[45px] h-[45px]"/>
                <p className="flex justify-end ml-2">Jarak dari Kampus ITB {props.lokasikampus}: {props.jarakKeKampusITB} km</p>
            </div>
            <button className="gmapsbutton hover:bg-gradient-to-r from-purple-600 to-yellow-600 duration-500 ease-in-out transition-all font-semibold" onClick={() => window.open(props.gmapslink, "_blank")}>Link GMAPS</button>
        </div>
    )
}