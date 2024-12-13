import mongoose from 'mongoose';

export default async  function connectDB  ()  {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL || '', {
      // Les options useNewUrlParser et useUnifiedTopology ne sont plus nécessaires
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

