import { usersCollection } from "../database/Schema/UsersSchema.js";
import jwt from "jsonwebtoken";
export const forgotPasswordHelper = async (req, res) => {
  const { id, token } = req.query;
  const key = process.env.SIGN_KEY;
  // verify token
  const user_exist = await usersCollection.findById(id);

  if (!user_exist) {
    return res.status(401).json({
      errorMessage: "Invalid email address !",
    });
  }

  // ! verify token
  try {
    const verify = await jwt.verify(token, key);

    return res.render("../views/ChangePass", { email: user_exist.email });


  } catch (error) {
    console.log(error);
    return res.render("../views/message",{message:"your token has expired , try again to reset your password ",msg2:"follow this link to try again"})
  }
};
