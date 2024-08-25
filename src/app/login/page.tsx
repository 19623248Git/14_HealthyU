"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "", 
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const  [loading, setloading] = React.useState(false);

  const onLogin = async () => {
    try {
      setloading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful");

      const res = await axios.get('/api/users/me')

      router.push(`/profile/${res.data.data._id}`);
      
    } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally{
      setloading(false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (

    <div className="h-[852px] relative overflow-hidden"
    style={{
      background:
          "linear-gradient(-52.13deg, rgba(165, 93, 222, 1.00) 0%,rgba(206, 101, 177, 1.00) 50%,rgba(241, 204, 51, 1.00) 100%), linear-gradient(to left, #d9d9d9, #d9d9d9)",
      }}>
      <img className= "flex text-center items-center justify-center absolute top-[30px]"
      src="healthy-u-logo-10.png"/>
      <div className="bg-[#D9D9D9] rounded-tl-[20px] rounded-[20px] w-[393px] h-[301px] absolute left-0 top-[360px]"></div>
      <div className="flex text-center items-center justify-center min-h-screen absolute left-1/2 transform -translate-x-1/2  font-['NotoSerif-SemiBold',_sans-serif] leading-none font-bold text-2xl">
        <h1>{loading ? "Processing" : "Login"}</h1>
      </div>
      <div className="flex items-center justify-center min-h-screen absolute top-[70px] left-[33px] font-['NotoSerif-SemiBold',_sans-serif] text-lg leading-none font-semibold">
        <label>
          Email :   
          <input
            id="email" 
            type="text"
            value={user.email}
            onChange={(e) => setUser({
              ...user,
              email: e.target.value,
              })}
            placeholder=" email" 
            />
        </label>
      </div>
      <div className="flex items-center justify-center min-h-screen absolute left-[33px] top-[110px] font-['NotoSerif-SemiBold',_sans-serif] text-lg leading-none font-semibold">
        <label>
          Password : 
          <input
            id="password" 
            type="password"
            value={user.password}
            onChange={(e) => setUser({
              ...user,
              password: e.target.value,
              })}
            placeholder=" password" 
            />
        </label>
      </div>
      <div className="flex items-center justify-center min-h-screen absolute top-[170px] left-1/2 transform -translate-x-1/2  font-['NotoSerif-SemiBold',_sans-serif] leading-none font-semibold">
      <button 
      onClick={onLogin}>{buttonDisabled ? "No Login" : "Login"}</button>
      </div>
      <div className="flex items-center justify-center min-h-screen absolute top-[200px] left-1/2 transform -translate-x-1/2  font-['NotoSerif-SemiBold',_sans-serif] leading-none font-semibold">
        <Link href="/signup">Don't have an account?</Link>
      </div>
    </div>
  )
}

export default login;