import mongoose, { Schema } from "mongoose";
import JsonWebToken from "jsonwebtoken"
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    usernmae: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    avtar: {
      type: String, //cloudnry url
      required: true,
    },

    coverImage: {
      type: String, //cloudnry url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],

    password: {
      type: String,
      requird: [true, "password is requird"],
    },

    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
    // 10 is round to hashing  password that it will be hashed 10 time
}); // do not use arrow function in because arrow function does not have this access use finction instead of arrow function
 userSchema.methods.isPasswordCorrect= async function(password){
   return await bcrypt.compare(password,this.password)
 }

 userSchema.methods.generateAccessToken= function (){
  return JsonWebToken.sign({
        _id:this._id,
        email: this.email,
        usernmae:this.usernmae,
        fullname: this.fullname,

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
 }
 userSchema.methods.generateRefreshToken= function (){
    return JsonWebToken.sign({
        _id:this._id,
        

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)

    
 }
export const user = mongoose.model("User", userSchema);
