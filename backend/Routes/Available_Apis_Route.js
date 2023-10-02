import { Router } from "express";
import { Api_collection } from "../database/Schema/Api_Schema.js";
import { create_newApi_Helper } from "../Helpers/AvailableApi_helper.js";
import { validate_token } from "../Middleware/ValidateTokenMiddleware.js";

export const Available_api_Route = Router();

Available_api_Route.get("/simpleIntegration/api/v1/apis", async (req, res) => {
  try {
    const result = await Api_collection.find();
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "internal server error",
      error: error,
    });
  }
});

Available_api_Route.post("/simpleIntegration/api/v1/apis",validate_token,async (req, res) => {
create_newApi_Helper(req,res)

});

