import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('debug', true);


export async function main() {
    await mongoose.connect(process.env.MONGO_URL, {
        dbName: process.env.MONGO_DB
    });
}

main().then(() => {
    console.log('MongoDB connected successfully!')
}).catch((err) => {
    console.error('MongoDB connection error:', err)
})