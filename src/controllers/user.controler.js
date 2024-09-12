import { requestHandler } from "../utils/utlites.js";
const registerUser = requestHandler(async(req,res,)=>{
    res.status(200).json({
        message:"ok"
    })
})

export {registerUser}