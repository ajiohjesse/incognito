import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw Error('MONGODB_URI is not defined in the environment');
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
  } catch (error) {
    console.log('DB connection error: ', error);
    throw error;
  }
};

export default connectDB;
