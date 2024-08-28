import {connect} from "@/dbConfig/dbConfig";
import Data_RS from "@/models/data_rsModel";
import { NextRequest,NextResponse } from "next/server";
import { ObjectId } from "mongodb"; 

connect();

export async function GET(request: NextRequest){
    try {
        // const data_rs = await Data_RS.findOne({_id: "66cf283e540b6b0a8a4735b1"});
        const data_rs = await Data_RS.findOne({_id: new ObjectId("66cf283e540b6b0a8a4735b1")});
        if(!data_rs){
            return NextResponse.json({error: "Data RS not found"}, {status: 404});
        }
        return NextResponse.json({
            message: "Data RS Found",
            data: data_rs,
        });
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

