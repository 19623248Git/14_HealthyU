"use client";

import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { get } from "http";
import HomePage from "../homepage/page";
import Home from "../page";

export default function UserProfile({params}: any){
    
    const router = useRouter();
    const [data, setData] = React.useState({
        asal_daerah: "",
        email: "",
        golongan_darah: "", 
        jenis_kelamin: "",
        nama_lengkap: "",
        nim: "",
        username: "", 
        __v: "",
        _id: "",
    });

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data);
    }

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error:any) {
            console.log("Logout failed", error.message);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    console.log("OUTPUTDATA", data);

    return (
    <div className="h-full w-full relative overflow-hidden flex flex-col bg-white">
        <div className ="flex absolute justify-start">
            <button className=" my-7 mx-7 text-zinc-700 w-24 h-8 bg-gray-300 bg-opacity-25 items-center justify-center flex rounded-2xl border-2 border-white">
             <Link href="/homepage" className="text-center">BACK</Link>
            </button>
        </div>
        <div className=" w-full h-20" style={{
            background:
            "linear-gradient(-52.13deg, rgba(165, 93, 222, 1.00) 0%,rgba(206, 101, 177, 1.00) 50%,rgba(241, 204, 51, 1.00) 100%), linear-gradient(to left, #d9d9d9, #d9d9d9)",
         }}>
            <div className="flex justify-end">
                <button onClick={logout} className=" my-7 mx-7 text-zinc-700 w-24 h-8 bg-gray-300 bg-opacity-25 rounded-2xl border-2 border-white">
            LOGOUT{" "}
            </button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center m-4 p-4">
            <img className="rounded-full w-1/5 h-1/5" src="batman.jpg"/>
            <h1 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-xl font-bold mt-2">{data.username}</h1>
            <h2 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-lg font-normal">{data.email}</h2>
        </div>
        <div className=" flex ml-auto items-center justify-center shadow-lg  flex-col mx-auto mb-10 w-1/2  bg-white rounded-xl border-2">
            <h1 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-xl font-bold m-2 mt-3">PROFIL SAYA</h1>
            <h2 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-sm font-normal m-1/2">Nama Lengkap : {data.nama_lengkap}</h2>
            <h2 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-sm font-normal m-1/2">NIM : {data.nim}</h2>
            <h2 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-sm font-normal m-1/2">Jenis Kelamin : {data.jenis_kelamin}</h2>
            <h2 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-sm font-normal m-1/2">Asal Daerah : {data.asal_daerah}</h2>
            <h2 className="text-[#000000] font-['Poppins-Bold',_sans-serif] text-sm font-normal m-1/2 mb-5">Golongan Darah : {data.golongan_darah}</h2>
        </div>
    </div>
    )   
}