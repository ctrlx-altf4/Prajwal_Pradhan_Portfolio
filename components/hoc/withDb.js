import mongoose from 'mongoose';

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) return handler(req, res);
  // Using new database connection  process.env.MONGODB_URI,
  await mongoose.connect('mongodb://ctrlx.altf4:compexit4@ds229258.mlab.com:29258/portfolio-dev',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useCreateIndex: true,
  })
  return handler(req, res);
}

export default connectDb;