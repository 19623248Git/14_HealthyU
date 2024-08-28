"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import RS_label from "./RS_label";

export default function HomePage(){
    
    const router = useRouter();
    const [data_id,setData_id] = React.useState("nothing");
    const [data_rs,setData_rs] = React.useState(
        {
            "_id": {},
            "jatinangor": [],
            "ganesha": [],
            "cirebon": []
          }
    );
    const [rspull , setRspull] = React.useState([]);
    
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData_id(res.data.data._id);
    }

    const getDataRS = async () => {
        const res = await axios.get('/api/users/data_rs')
        setData_rs(res.data.data);
    }

    const getProfile = async () => {
        router.push(`/profile`);
    }

    const pullData = async (params:string) => {
        if (params === "ganesha"){
            setRspull(rs_ganesha);
        }
        else if (params === "jatinangor"){
            setRspull(rs_nangor);
        }
        else if (params === "cirebon"){
            setRspull(rs_cirebon);
        }
    }

    useEffect(() => {
        getDataRS();
    }, []);

    useEffect(() => {
        if (rspull.length === 0){
            setRspull(rs_ganesha);
        }
    }, [data_rs]);

    let rs_nangor: any = data_rs.jatinangor.map((RS: any, index) => {
        let lokasikampus = "Jatinangor";
        return(
            <RS_label key={index}
                rumahSakit={RS.rumahSakit} 
                specialis={RS.specialis} 
                jarakKeKampusITB={RS.jarakKeKampusITB} 
                lokasikampus={lokasikampus}
                gmapslink={RS.gmapslink}
            />
        )
    })

    let rs_ganesha: any = data_rs.ganesha.map((RS: any, index) => {
        let lokasikampus = "Ganesha";
        return(
            <RS_label  key={index}
                rumahSakit={RS.rumahSakit} 
                specialis={RS.specialis} 
                jarakKeKampusITB={RS.jarakKeKampusITB} 
                lokasikampus={lokasikampus}
                gmapslink={RS.gmapslink}
            />
        )
    })

    let rs_cirebon: any = data_rs.cirebon.map((RS: any, index) => {
        let lokasikampus = "Cirebon";
        return(
            <RS_label key={index}
                rumahSakit={RS.rumahSakit} 
                specialis={RS.specialis} 
                jarakKeKampusITB={RS.jarakKeKampusITB} 
                lokasikampus={lokasikampus}
                gmapslink={RS.gmapslink}
            />
        )
    })


    return(
        <div className="homepage">
            <button className="mx-auto my-7 text-zinc-700 w-24 h-8 bg-gray-300 rounded-2xl border-2 border-white" onClick={getProfile}>profile</button>
            <div className="flex flex-row mx-auto gap-x-11">
                <button onClick={() => pullData("ganesha")}>Ganesha</button>
                <button onClick={() => pullData("jatinangor")}>Jatinangor</button>
                <button onClick={() => pullData("cirebon")}>Cirebon</button>
            </div> 
            <div className="flex flex-col justify-center items-center">
                {rspull}
            </div>
        </div>
    )
}