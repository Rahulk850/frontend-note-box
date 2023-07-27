import mongoose, { model } from 'mongoose';

const noteSchema = new Schema({
    title :{
       type: String,
       required : true
    },
    tag:{
        type:string,
        default:'general'
    } ,
    description:{
        type:string,
        required:true,
    } ,
   
 
});

model.exports = mongoose.model('user',noteSchema);