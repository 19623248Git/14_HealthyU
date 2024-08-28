import React, { useEffect } from "react";
// import stethoscope from "../../stethoscope.png";

export default function RS_label(props:any){
    return(
        <div className="px-23 font-sans flex justify-center items-center flex-col mx-6 my-3 max-w-screen-lg h-40 bg-white rounded-xl">
            <h1 className="flex justify-center">🩺 {props.rumahSakit}</h1>
            <p className="flex justify-center">🩺 {props.specialis}</p>
            <p className="flex justify-center">🩺 Jarak dari Kampus ITB {props.lokasikampus}: {props.jarakKeKampusITB}</p>
            <button className="gmapsbutton" onClick={() => window.open(props.gmapslink, "_blank")}>Link GMAPS</button>
        </div>
    )
}