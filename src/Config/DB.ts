import mongoose from "mongoose";

const DB_URL = "mongodb://localhost/StandardBackend";

const DBconfig = async() =>{
    try {
        const db = await mongoose.connect(DB_URL);
        console.log("")
        console.log(`Database is connected to ${db.connection.host}`)
    } catch (error) {
        console.log("An error occured in connecting database")
    }
}

export default DBconfig;