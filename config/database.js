import mongoose from "mongoose";

let url = process.env.URI_MONGO;
async function DBconnection(){
    try {
        await mongoose.connect(url)
        console.log("database connected");
        
    }catch (error) {
        console.log(error)
    }
}
DBconnection()
