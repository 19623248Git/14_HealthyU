import React, { useEffect } from "react";
// import stethoscope from "../../stethoscope.png";

export default function RS_label(props:any){
    return(
        <div className="px-23 font-sans flex justify-center shadow-2xl p-2 flex-col mx-6 my-3 max-w-screen-lg h-40 w-96 bg-white rounded-xl">
            <h1 className="flex justify-end mr-2 font-bold"> {props.rumahSakit}</h1>
            <p className="flex justify-end mr-2">🩺 {props.specialis}</p>
            <p className="flex justify-end mr-2">🩺 Jarak dari Kampus ITB {props.lokasikampus}: {props.jarakKeKampusITB} km</p>
            <button className="gmapsbutton" onClick={() => window.open(props.gmapslink, "_blank")}>Link GMAPS</button>
        </div>
    )
}