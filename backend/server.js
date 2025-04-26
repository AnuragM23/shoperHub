import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use("/api/auth", authRoutes); // authentication

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);

    connectDB();
})
