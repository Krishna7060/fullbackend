import {v2 as cloudinary} from "cloudinary";
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NA,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });

    const uploadCloudnary = async (localFilePath)=>{
        try {
            if(!localFilePath) return null
            // file uploading
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            console.log('file has been uploaded succesfully',response.url)
            return response

            
            
        } catch (error) {
            fs.unlinkSync(localFilePath)
            
        }
    }