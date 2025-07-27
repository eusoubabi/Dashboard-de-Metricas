import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

console.log("MONDAY_API_KEY:", process.env.MONDAY_API_KEY);
