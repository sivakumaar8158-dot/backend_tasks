import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({


movieData:{type:String},
movieName:{type:String},
ProducerName:{type:String},
DirectorName:{type:String},
actorName:{type:String},
actressName:{type:String},
MovieType:{type:String},
movieLanguage:{type:String},
status:{type:String,default:"Active"},
RelasingDate:{type:String},
createdBy:{type:String,default:"Admin"},
updatedBy:{type:String},


},{timestamps:true})


const movieDataModel = mongoose.model("movieData",movieSchema)

export default movieDataModel;