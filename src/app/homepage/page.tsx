"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import RS_label from "./RS_label";
import { get } from "http";

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
            <div className="flex items-center justify-between mb-2">
                <div className="flex  margin-left my-7 mx-7">
                    <img className="size-[45px]" src="Logo-HealthyU.png" />
                    <div className="pl-[10px] text-[50px] font-serif text-purple-700">HealthyU</div>
                </div>
                <button className="ml-auto my-7 mx-7 text-zinc-700 w-12 h-12 bg-opacity-25 rounded-full border-2 border-purple-700" onClick={getProfile}>
                    <img src="icon-profile-removebg-preview.png"/>
                </button>
            </div>
            <div className="text-lg text-white gap-x-2 font-semibold items-center text-center flex justify-center h-[50px] w-[380px] mx-auto mb-4 py-2 rounded-2xl  ">
                <div className= "bg-purple-400 content-center w-full h-[50px] px-5 py-1.5 hover:duration-500 hover:ease-in-out hover:opacity-50 rounded-2xl shadow-xl">
                    <button onClick={() => pullData("ganesha")}>Ganesha</button>
                </div>
                <div className= "bg-purple-400 content-center w-full h-[50px] px-5 py-1.5 hover:duration-500 hover:ease-in-out hover:opacity-50 rounded-2xl shadow-xl">
                    <button onClick={() => pullData("jatinangor")}>Jatinangor</button>
                </div>
                <div className= "bg-purple-400 content-center w-full h-[50px] px-5 py-1.5 hover:duration-500 hover:ease-in-out hover:opacity-50 rounded-2xl shadow-xl">
                    <button onClick={() => pullData("cirebon")}>Cirebon</button>
                </div>
            </div> 
            <div className="flex flex-col justify-center items-center">
                {rspull}
            </div>
        </div>
    )
}