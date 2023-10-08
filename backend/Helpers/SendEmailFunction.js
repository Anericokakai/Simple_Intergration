 import dotenv from "dotenv"
import { usersCollection } from "../database/Schema/UsersSchema.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

dotenv.config();

const key = process.env.SIGN_KEY;
export const sendEmailsHelpers=async(req,res)=>{




    try {
        const { email } = req.body;
        if(!email){
          return res.status(401).json({
            errorMessage:"Invalid credentials"
          })
        }
        // ! check if user exist
        const user_exist = await usersCollection.findOne({ email: email });
  
        if (!user_exist) {
          return res.status(401).json({
            errorMessage: "Invalid email address !",
          });
        }
  
        // !crate anew token
  
        const token = await jwt.sign({ email: email }, key, {
          expiresIn: "1h",
        });
  
        const link = `http://localhost:6060/reset-pass?id=${user_exist._id}&token=${token}`;
  

  
  
  
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "challykiddoh@gmail.com",
            pass: "ikiy unxb ewmx cpgs",
          },
        });
        let message = {
          from: '"simple Integrations 👻" <simpleIntegration@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "password reset ", // Subject line
          text: `hello ,`, // plain text body
          html: `
          <!DOCTYPE html>
          <html>
          <head>
          <style>
          .restBtn{
            padding:17px 20px;
            color:white;
            background-color:#2F81F7;
            border:none;
            border-radius:10px;
  
          }
          .link{
            text-align:center;
          }
          .hs{
            color:white;
          }
          body{
            color:white;
            background-color: #0d1117;
            width:100vw;
            height:100vh;
          }
          </style>
        
          </head>
          <body>
          <h2 class="hs">Hello ${user_exist.name} ✔</h2>
          <br></br>
          <p>Here is the link to reset your password,the link will expire in  1 hour</p>
          <a href="${link}" class="link"> <button class="restBtn"> reset password</button> </a>
          <p>Perfect your front end skills with apis</p>
          </body>
  
  
          </html>
          `,
        };
  
        transporter
          .sendMail(message)
          .then(() => {
            return res.status(200).json({
              success: true,
              message: "check your email for a link to rest your password",
            });
          })
          .catch((error) => {
            res.status(500).json({
              errorMessage: "failed to send email",
              error,
            
            });
          });
      } catch (error) {
        console.log(error)
        res.status(500).json({
          errorMessage: "internal server error ,please try again",
          error,
        });
      }
}