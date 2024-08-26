"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function HomePage(){

    const [data,setData] = React.useState("nothing");
    
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data);
    }

    return(
        <div>
            <h1>Welcome to Home Page</h1>
        </div>
    )
}