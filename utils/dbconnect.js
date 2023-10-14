import mongoose from "mongoose";
import config from "config"


const dbConnect =async () =>{
    try{
        await mongoose.connect(config.get("DB_URI"));
        console.log("DB connected sucessfully");
        
    }
    
    catch(error){
        console.log("It is an error !");
        
    }
}

dbConnect();