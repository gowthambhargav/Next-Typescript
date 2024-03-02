import { connect } from "@/dbConfig/dbConfig";

import { NextResponse, NextRequest } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { use } from "react";
connect()


export async function POST (request:NextRequest){
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);
        const userId = await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
        if (!userId) {
            return NextResponse.json({message:"Invalid token"},{status:400})
        }
        console.log(userId);
        userId.isVerfied = true
        userId.verifyToken = undefined
        userId.verifyTokenExpiry = undefined
        await userId.save()
        return NextResponse.json({message:"Email verified",success:true},{status:200})
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:400})
        
    }
}