import express, { urlencoded } from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit:"25kb"}))
app.use(urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Routers import
import userRouter from "./routes/user.rout";
app.use("/api/v1/users/register")
export{app}