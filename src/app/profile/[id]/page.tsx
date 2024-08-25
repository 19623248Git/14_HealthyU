"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UserProfile({params}: any){
    
    const router = useRouter();
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

    return (

    <div
        className={"bg-[#ffffff] h-[852px] relative overflow-hidden "}
    >
    <div className="md: flex">
        <img
            className="w-[25px] h-[25px] absolute left-[348px] top-[41px] overflow-visible"
            src="icons-8-menu-10.svg"
        />
        <img
            className="w-[392px] h-[86px] absolute left-px top-[215px] overflow-visible"
            src="vector-1250.svg"
        />
        <img
            className="rounded-xl w-[86px] h-[86px] absolute left-[71px] top-[149px]"
            style={{ objectFit: "cover" }}
            src="rectangle-720.png"
        />
        <div className="text-[#000000] text-left font-['Poppins-Bold',_sans-serif] text-xl font-bold absolute left-[168px] top-[149px]">
            Jajang Kopling{" "}
        </div>
        <div className="text-[#000000] text-left font-['Poppins-Medium',_sans-serif] text-[10px] font-medium absolute left-[168px] top-[182px]">
            Jangkong@gmail.com{" "}
        </div>
        <div className="text-[#000000] text-left font-['Poppins-Medium',_sans-serif] text-[10px] font-medium absolute left-[168px] top-[200px]">
            +62 8XX XXX XXX{" "}
        </div>
        <div
            className="w-[393px] h-[301px] absolute left-0 top-[282px] overflow-hidden"
            style={{
            boxShadow:
                "0px 19px 43px 0px rgba(0, 0, 0, 0.07),  0px 78px 78px 0px rgba(0, 0, 0, 0.06),  0px 174px 105px 0px rgba(0, 0, 0, 0.03),  0px 310px 124px 0px rgba(0, 0, 0, 0.01),  0px 485px 136px 0px rgba(0, 0, 0, 0.00)",
            }}
        >
            <div className="bg-[#ffffff] rounded-tl-[20px] rounded-tr-[20px] w-[393px] h-[301px] absolute left-0 top-0"></div>
            <div
            className="text-center font-['NotoSerif-Black',_sans-serif] text-[15px] leading-none font-black absolute left-[22px] top-[27px]"
            style={{
                background:
                "linear-gradient(-52.13deg, rgba(165, 93, 222, 1.00) 0%,rgba(206, 101, 177, 1.00) 50%,rgba(241, 204, 51, 1.00) 100%)",
                backgroundClip: "text",
            }}
            >
            Profil Saya{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-[33px] top-[86px]">
            Nama{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-36 top-[86px]">
            Jajang Kopling Naraputra{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-36 top-[127px]">
            XXXXXXX{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-36 top-[168px]">
            Tunggal Campuran{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-36 top-52">
            Land of Dawn{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-36 top-[250px]">
            C++{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-[33px] top-[127px]">
            NIM{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-[33px] top-[168px]">
            Kelamin{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-[33px] top-[209px]">
            Asal Daerah{" "}
            </div>
            <div className="text-[#000000] text-center font-['NotoSerif-SemiBold',_sans-serif] text-xs leading-none font-semibold absolute left-[33px] top-[250px]">
            Gol. Darah{" "}
            </div>
            <div
            className="border-solid border-[#000000] border-t border-r-[0] border-b-[0] border-l-[0] w-[333.01px] h-0 absolute left-[22px] top-[57px]"
            style={{
                marginTop: "-1px",
                transformOrigin: "0 0",
                transform: "rotate(0deg) scale(1, 1)",
            }}
            ></div>
        </div>
        <div
            className="w-[393px] h-24 absolute left-0 top-0"
            style={{
            background:
                "linear-gradient(-52.13deg, rgba(165, 93, 222, 1.00) 0%,rgba(206, 101, 177, 1.00) 50%,rgba(241, 204, 51, 1.00) 100%), linear-gradient(to left, #d9d9d9, #d9d9d9)",
            }}
        ></div>
        <img
            className="w-[506px] h-[403px] absolute left-[calc(50%_-_371.5px)] top-[-121px]"
            style={{ objectFit: "cover" }}
            src="../public/healthy-u-logo-10.png"
        />
        <div
            className="bg-[rgba(255,255,255,0.30)] rounded-[15px] border-solid border-[#ffffff] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] w-[98px] h-[30px] absolute left-[238px] top-[29px]"
            style={{ backdropFilter: "blur(15px)" }}
        >
            <img
            className="rounded-sm w-[11px] h-[11px] absolute left-2.5 top-2.5"
            style={{ objectFit: "cover" }}
            src="../public/rectangle-721.png"
            />
            <div className="text-[#616161] text-left font-['Poppins-Bold',_sans-serif] text-[7px] font-bold absolute left-[25px] top-2.5">
            Jajang Kopling{" "}
            </div>
            <div className="!w-[9px] !h-[9px] !absolute !left-[84px] !top-[11px]"></div>
        </div>
        <div className="text-[#ffffff] text-left font-['Poppins-Bold',_sans-serif] text-[8px] font-bold absolute left-[260px] top-[66px]">
            +62 08XXXXXXX{" "}
        </div>
        </div>
    </div>
    )   
}