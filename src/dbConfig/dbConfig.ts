import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        
        console.log(connection);

        connection.on('connected', () => {
            console.log('Connected to database');
        })

        connection.on('error', (err) => {
            console.log('Error connecting to database');
            console.log(err);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
    }

}