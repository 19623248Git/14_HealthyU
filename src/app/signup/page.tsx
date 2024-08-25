"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const signup = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "", 
    password: "",
    username: "",
    NIM: "",
    jenis_kelamin: "",
    asal_daerah: "",
    golongan_darah: "",
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
    <div>
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <label>
        Username
        <input
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
      <label>
        NIM
        <input
          id="nim" 
          type="text"
          value={user.NIM}
          onChange={(e) => setUser({
            ...user,
            NIM: e.target.value,
            })}
          placeholder="nim" 
          />
      </label>
      <br />
      <label>
        Jenis Kelamin
        <input
          id="jenis_kelamin" 
          type="text"
          value={user.jenis_kelamin}
          onChange={(e) => setUser({
            ...user,
            jenis_kelamin: e.target.value,
            })}
          placeholder="Jenis Kelamin" 
          />
      </label>
      <br />
      <label>
        Asal Daerah
        <input
          id="asal_daerah" 
          type="text"
          value={user.asal_daerah}
          onChange={(e) => setUser({
            ...user,
            asal_daerah: e.target.value,
            })}
          placeholder="Asal Daerah" 
          />
      </label>
      <br />
      <label>
        Golongan Darah
        <input
          id="golongan_darah" 
          type="text"
          value={user.golongan_darah}
          onChange={(e) => setUser({
            ...user,
            golongan_darah: e.target.value,
            })}
          placeholder="Golongan Darah" 
          />
      </label>
      <br />
      <label>
        Email
        <input
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
      <label>
        Password
        <input
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
      <br /> 
      <button 
      onClick={onSignup}>{buttonDisabled ? "No Signup" : "Signup"}</button>
      <br /> 
      <Link href="/login">Already have an account?</Link>
    </div>
  )
}

export default signup;