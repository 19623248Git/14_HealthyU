"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const [loading, setloading] = React.useState(false);

  const onLogin = async () => {
    try {
      setloading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful");

      router.push(`/homepage`);
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div
      className="h-[852px] w-full relative overflow-hidden flex justify-center flex-col items-center"
      style={{
        background:
          "linear-gradient(-52.13deg, rgba(165, 93, 222, 1.00) 0%,rgba(206, 101, 177, 1.00) 50%,rgba(241, 204, 51, 1.00) 100%), linear-gradient(to left, #d9d9d9, #d9d9d9)",
      }}>
      <div className=" absolute top-[30px] flex flex-row  items-center justify-center">
        <img className="left-[30px] size-[100px]" src="Logo-HealthyU.png" />
        <div className="pl-[20px] text-[50px] font-serif text-indigo-800">HealthyU</div>
      </div>
      <img className="absolute top-[164px] size-[200px]" src="johnny-10.png"/>
      <div className="bg-[#D9D9D9] opacity-70 rounded-tl-[20px] rounded-[20px] w-[94%] h-[301px] absolute  top-[360px] ml-3 mr-3"></div>
      <div className="flex text-center items-center justify-center min-h-screen absolute transform left-1/2-translate-x-1/2  font-['NotoSerif-SemiBold',_sans-serif] leading-none font-bold text-2xl">
        <h1 className="font-serif text-4xl text-[#A55DDE] mb-[20px]">{loading ? "Processing" : "Login"}</h1>
      </div>
      <div className="flex flex-col justify-center items-center justify-center min-h-screen absolute top-[110px] font-['NotoSerif-SemiBold',_sans-serif] text-lg leading-none font-semibold w-full left-[33px]">
        <br />
        <label className="font-serif mr-1 text-black text-opacity-50">
          Email :
          <input
            className="mr-4 shadow-lg w-[200px]"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
            placeholder=" email"
            />
        </label>
        <br />
        <label className="font-serif mr-2 text-black text-opacity-50">
          Password :
          <input
            className="mr-12 shadow-lg w-[200px]"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            placeholder=" password"
            />
        </label>
      </div>
      <button 
      className="pointer-events-auto mt-[600px] rounded-3xl w-[200px] h-[50px] border-2 opacity-100 text-white font-serif text-[20px] bg-gradient-to-r from-yellow-500 to-purple-600" 
      onClick={onLogin}>{buttonDisabled ? "Please fill in" : "Login"}</button>
      <div className="flex items-center justify-center min-h-screen absolute top-[200px] left-1/2 transform -translate-x-1/2  font-['NotoSerif-SemiBold',_sans-serif] leading-none font-semibold">
        <Link className="text-opacity-50 font-serif" href="/signup">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default login;
