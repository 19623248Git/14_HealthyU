import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import { Console } from "console";


connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json();
        const {username, nama_lengkap, nim, jenis_kelamin, asal_daerah, golongan_darah, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user_email = await User.findOne({email: email})
        const user_username = await User.findOne({username: username})
        const user_nama_lengkap = await User.findOne({nama_lengkap: nama_lengkap})
        const user_nim = await User.findOne({nim: nim})

        if(user_email || user_username || user_nama_lengkap || user_nim){
            return NextResponse.json({error: "User already exists"}, {status:400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            nama_lengkap,
            nim,
            jenis_kelamin,
            asal_daerah,
            golongan_darah,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}