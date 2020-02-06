import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const obj = {type:String, required:true, maxlength:256};

const setValidator=(maxlength)=>({type:String, required:true, maxlength})

const portfolioSchema = new Schema({
    userId:setValidator(512),
    title:setValidator(256),
    company:setValidator(256),
    location:setValidator(128),
    position:setValidator(256),  
    description:setValidator(2048),
    startDate:{type:Date, required:true},
    endDate:Date
})

export default mongoose.model.Potfolio || mongoose.model('Portfolio', portfolioSchema)
