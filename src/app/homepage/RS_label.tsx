import React, { useEffect } from "react";

export default function RS_label(props:any){
    return(
        <label onClick={() => window.open(props.gmapslink, "_blank")} >
            <h1>{props.rumahSakit}</h1>
            <p>{props.specialis}</p>
            <p>Jarak dari Kampus ITB {props.lokasikampus}: {props.jarakKeKampusITB}</p>
        </label>
    )
}