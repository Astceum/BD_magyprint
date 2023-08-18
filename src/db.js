import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/admin_magy');
        console.log(">>> Base de Datos Conectada <<<")
    } catch (error) {
        console.log(error);
    }
}


