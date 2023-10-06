import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {

    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "uczymy_pl",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            isConnected = true;

            console.log('MongoDB connected')
        } catch (error) {
            console.log(error);
        }
    }

    return { isConnected };
}
