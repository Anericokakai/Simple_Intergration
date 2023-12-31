import axios from "axios";
import dotenv from "dotenv";
import { usersCollection } from "../database/Schema/UsersSchema.js";
import { generateToken } from "./TokensGenerator.js";
dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
export const Login_with_gitHub_helper = async (req, res) => {
 try {
  

  if(!req.query.code){
    return res.status(401).json({
      ErrorMessage:"invalid login credentials !! please try again"
    })
  }
  const urlParams = `?client_id=${clientId}&client_secret=${clientSecret}&code=${req.query.code}`;
  await axios
    .post(`https://github.com/login/oauth/access_token${urlParams}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => {
      // make an array at the &
      const resultsArray = data.data.split("&");

      // loop through the pairs
      for (const single of resultsArray) {
        const [key, value] = single.split("=");
        if (key === "access_token") {
          
          res.status(200).json({ token: value });
        }
      }
    })
    .catch((err) => {
      res.status(401).json({ error: err.message });
    });
  
 } catch (error) {
  return res.status(500).json({errorMessage:"internal server error ,please try again",error:error})
 }

  // ! get user data from
};

// ! get user data function
export const Get_user_data_helper = async (req, res) => {
  try {
    const token =req.headers.authorization


    await axios
      .get(`https://api.github.com/user`, {
        headers: {
          Authorization:token ,
        },
      })
      .then(async (data) => {
        const { id, name, login, avatar_url } = data.data;

        let userData;
        //  ! check if the id exist in the database if not
        const user_exist = await usersCollection.findOne({ git_hub_id: id });
        if (!user_exist) {
         const user= await usersCollection.create({
            name,
            avatar_url: avatar_url,
            git_hub_id: id,
          });
          userData=user;
        }
        if(user_exist){
          userData=user_exist;
        }
        // create a token and send it back
        const token_id = id;
        const expiryTime = "100s";
        const sign_key = process.env.SIGN_KEY;
        const token = await generateToken(token_id, sign_key, expiryTime);

        res.status(200).json({
          token: token,
          userInfo: userData,
          validUser:true
        });
      })
      .catch((err) => {
        res
          .status(401)
          .json({
            errorMessage: "Bad credentials please try again",
            error: err.message,
            errorDetail:err
          });
        
      });
  } catch (error) {
    res
      .status(500)
      .json({
        errorMessage: "internal server error ,please try again !",
        error: error,
      });
  }
};
