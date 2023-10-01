import { usersCollection } from "../database/Schema/UsersSchema.js";
 import bcryptjs from "bcryptjs"
export const CreateAccount_Helper = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ errorMessage: "Invalid user credentials !" });
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return res.status(401).json({ errorMessage: "invalid email address !" });
    }

    const mediumPass = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );
    if (!mediumPass.test(password)) {
      return res.status(401).json({
        errorMessage:
          "weak password , passwords should contain at least a number ,uppercase  letter ,a special character ! ",
      });
    }

    // ! check if user already exist

    const isAlreadyAUser = await usersCollection.findOne({ email: email });
    if (isAlreadyAUser)
      return res
        .status(401)
        .json({ errorMessage: "user already exist ,Try to log in !" });

        const hashedPassword=   bcryptjs.hashSync(password,10)

    const newUser = await usersCollection.create({
      name,
      password:hashedPassword,
      email,
    });
    if (newUser) {
      return res.status(201).json({
        message: "user created successfully",
        redirectToLogin: true,
      });
    }

    // !check if the values misses
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal server error !! ,please try again",
      error: error,
    });
    console.log(error);
  }
};
