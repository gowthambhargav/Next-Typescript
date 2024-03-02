import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";


export async function GET(request:NextRequest){
    connect()
try {
    const userId = await getDataFromToken(request)
   const user = await User.findById(userId).select("-password")
   if (!user) {
    return NextResponse.json({message:"user notfound"},{status:400})
   }
   return NextResponse.json({message:"user found",data:user})
} catch (error:any) {
    console.log(error.message);
    return NextResponse.json({message:error.message},{status:400})
}
}







