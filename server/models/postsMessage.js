import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    crator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }

});


const postMessage=mongoose.model('postmessage',postSchema);

export default postMessage;