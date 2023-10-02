import { Router } from "express";
import { Login_helper_function } from "../Helpers/Login_helper_function.js";

import { forgotPasswordHelper } from "../Helpers/forgotPasswodHelper.js";
import { sendEmailsHelpers } from "../Helpers/SendEmailFunction.js";
import { UpdatePasswordHelper } from "../Helpers/UpdatePasswordHelper.js";

// ! login route of the user
export const User_Login_Route = Router();

User_Login_Route.post(
  "/simpleIntegration/api/v1/user_login",
  async (req, res) => {
    // !function to handle login .
    // !all this functions should go to the helper folder
    Login_helper_function(req, res);
  }
);

// ! FORGOT PASSWORD

export const forget_password_route = Router();

forget_password_route.post(
  "/simpleIntegration/api/v1/forgot_pass",
  async (req, res) => {
sendEmailsHelpers(req,res)

  }
);

forget_password_route.get("/reset-pass", async (req, res) => {
  forgotPasswordHelper(req, res);
})

forget_password_route.post("/reset-pass",(req,res)=>{


  UpdatePasswordHelper(req,res)
})
