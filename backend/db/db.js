import mongoose from 'mongoose';


const connectDB = async () => {
    console.log(process.env.MONGO_URI)
    try {
        await mongoose.connect("mongodb+srv://turkyilmazbrkn:CwQDvpMStgCbru6z@meinladen.rxkvj.mongodb.net/?retryWrites=true&w=majority&appName=MeinLaden");
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error connecting to database:', error);
        process.exit(1);
    }
}
export default connectDB