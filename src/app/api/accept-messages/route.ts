import { getServerSession } from "next-auth";
import { authOptions } from "../sign-up/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

import {User } from "next-auth";
import { isAcceptingMessageSchema } from "@/Schemas/acceptMessageSchema";

export async function POST(request: Request){
    await dbConnect()
    const session = await getServerSession(authOptions)
    const user: User = session?.user as User

    if(!session || !session.user){
        return Response.json({
            success: false,
            message: "Not Authenticated"
        }, {
            status: 401
        }
        )
    }
    const userId = user._id
    const {acceptMessage} = await request.json()
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId,
            {isAcceptingMessage: acceptMessage},
            {new: true}
        )
        if(!updatedUser){
            return Response.json({
                success: false,
                message: "failed to update user status to accept messages"
            }, {
                status: 401
            }
            )
        }
        return Response.json({
            success: true,
            message: "Message acceptance status updated successfully"
        }, {
            status: 200
        }
        )
    } catch (error) {
        console.error("failed to update user status to accept messages")
        return Response.json({
            success: false,
            message: "failed to update user status to accept messages"
        }, {
            status: 500
        }
        )
    }
}

export async function GET(request: Request){
    await dbConnect()
    const session = await getServerSession(authOptions)
    const user: User = session?.user as User

    if(!session || !session.user){
        return Response.json({
            success: false,
            message: "Not Authenticated"
        }, {
            status: 401
        }
        )
    }
    const userId = user._id
    const foundUser = await UserModel.findById(userId)

   try {
     if(!foundUser){
         return Response.json({
             success: false,
             message: "User not found"
         }, {
             status: 404
         }
         )
     }
     return Response.json({
         success: true,
         isAcceptingMessages: foundUser.isAcceptingMessage,
     
     }, {
         status: 200
     }
     )
   } catch (error) {
    console.error("Error in getting message acceptance status")
    return Response.json({
        success: false,
        message: "Error in getting message acceptance status"
    }, {
        status: 500
    }
    )
   }
}