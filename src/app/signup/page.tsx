"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    nama_lengkap: "",
    nim: "",
    jenis_kelamin: "",
    asal_daerah: "",
    golongan_darah: "",
    email: "", 
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const  [loading, setloading] = React.useState(false);

  const onSignup = async () => {
    try{
      setloading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error:any){

      console.log("Signup failed", error.message);
      toast.error(error.message);

    } finally{
      setloading(false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <div
      className="h-[1200px] relative flex overflow-x-hidden justify-center flex-col items-center"
      style={{
        background:
          "linear-gradient(-52.13deg, rgba(165, 93, 222, 1.00) 0%,rgba(206, 101, 177, 1.00) 50%,rgba(241, 204, 51, 1.00) 100%), linear-gradient(to left, #d9d9d9, #d9d9d9)",
      }}>
      <div className=" absolute top-[30px] flex flex-row  items-center justify-center">
        <img className="left-[30px] size-[100px]" src="Logo-HealthyU.png" />
        <div className="pl-[20px] text-[50px] font-serif text-indigo-800">HealthyU</div>
      </div>
      <img className="absolute top-[164px] size-[200px]" src="johnny-10.png"/>
      <div className="bg-[#D9D9D9] opacity-70 rounded-tl-[20px] rounded-[20px] w-[90%] h-[601px] absolute  top-[360px] ml-3 mr-3"></div>
        <div className="flex text-center items-center justify-center min-h-screen absolute left-1/2 transform -translate-x-1/2  font-['NotoSerif-SemiBold',_sans-serif] leading-none font-bold text-2xl">
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen absolute top-[210px] font-['NotoSerif-SemiBold',_sans-serif] text-lg leading-none font-semibold w-full  mt-[100px]">
          <h1 className="font-serif mb-[20px] mt-[15%] text-4xl text-[#A55DDE] ">{loading ? "Processing" : "Signup"}</h1>
          <div className="flex flex-col justify-center items-center">
            <label className="text-black text-opacity-50 items-center">
              {/* Username :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="username" 
                type="text"
                value={user.username}
                onChange={(e) => setUser({
                  ...user,
                  username: e.target.value,
                  })}
                placeholder="username" 
                />
            </label>
            <br /> 
            <label className="text-black text-opacity-50 items-center" >
              {/* Nama Lengkap :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="nama_lengkap" 
                type="text"
                value={user.nama_lengkap}
                onChange={(e) => setUser({
                  ...user,
                  nama_lengkap: e.target.value,
                  })}
                placeholder="nama" 
                />
            </label>
            <br />
            <label className="text-black text-opacity-50 items-center" >
              {/* NIM :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="nim" 
                type="text"
                value={user.nim}
                onChange={(e) => setUser({
                  ...user,
                  nim: e.target.value,
                  })}
                placeholder="nim" 
                />
            </label>
            <br />
            <label className="text-black text-opacity-50 items-center" >
              {/* Jenis Kelamin :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="jenis_kelamin" 
                type="text"
                value={user.jenis_kelamin}
                onChange={(e) => setUser({
                  ...user,
                  jenis_kelamin: e.target.value,
                  })}
                placeholder="laki/perempuan" 
                />
            </label>
            <br />
            <label className="text-black text-opacity-50 items-center" >
              {/* Asal Daerah :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="asal_daerah" 
                type="text"
                value={user.asal_daerah}
                onChange={(e) => setUser({
                  ...user,
                  asal_daerah: e.target.value,
                  })}
                placeholder="asal daerah" 
                />
            </label>
            <br />
            <label className="text-black text-opacity-50 items-center" >
              {/* Gol. Darah :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="golongan_darah" 
                type="text"
                value={user.golongan_darah}
                onChange={(e) => setUser({
                  ...user,
                  golongan_darah: e.target.value,
                  })}
                placeholder="A/B/AB/O" 
                />
            </label>
            <br />
            <label className=" text-black text-opacity-50 items-center" >
              {/* Email :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg"
                id="email" 
                type="text"
                value={user.email}
                onChange={(e) => setUser({
                  ...user,
                  email: e.target.value,
                  })}
                placeholder="email" 
                />
            </label>
            <br /> 
            <label className=" text-black text-opacity-50 items-center" >
              {/* Password :  */}
              <input
                className="flex px-2 py-2 w-full mt-2 shadow-lg rounded-lg "
                id="password" 
                type="password"
                value={user.password}
                onChange={(e) => setUser({
                  ...user,
                  password: e.target.value,
                  })}
                placeholder="password" 
                />
            </label>
          </div>
        <br /> 
        <button 
        className="mt-[100px] rounded-3xl w-[200px] h-[50px]  text-white text-[20px] hover:brightness-75 bg-gradient-to-r from-yellow-500 to-purple-600"
        onClick={onSignup}>{buttonDisabled ? "Please fill in" : "Signup"}</button>
        <br /> 
        <Link className="hover:underline mb-3" href="/login">Already have an account?</Link>
        </div>
    </div>
  )
}

export default Signup;