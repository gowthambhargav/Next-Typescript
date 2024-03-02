import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcrypt from 'bcrypt';



export const sendEmail = async ({email,emailType,userId}:any)=>{
    try {
        // create a hased token
        const hashToken = await bcrypt.hash(userId.toString(),10)
          if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,{verifyToken:hashToken,verifyTokenExpiry:Date.now() + 3600000})
          } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashToken,forgotPasswordTokenExpiry:Date.now() + 3600000})
          }
const transporter = nodemailer.createTransport({

        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.NODEMAILER_USERNAME,
          pass: process.env.NODEMAILER_PASSWORD,
        }
})

const mailOptions = {
    from:"gowthambhargav@gmail.com",
    to:email,
    subject:emailType === "VERIFY"?"Verify your email":"Reset your password",
    html:`<p>
    Click the link below to ${emailType === "VERIFY"?"verify your email":"reset your password"}
    <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a>
    <br>
    ${process.env.DOMAIN}/verifyemail?token=${hashToken}
    </p>`
}
const mailresponse =  await transporter.sendMail(mailOptions)


    } catch (error:any) {
        throw new Error(error.message)
    }

}