import mongoose from 'mongoose';

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) return handler(req, res);
  // Using new database connection  process.env.MONGODB_URI,
  await mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useCreateIndex: true,
  })
  return handler(req, res);
}

export default connectDb;