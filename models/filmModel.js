const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({

_id: [Schema.Types.ObjectId],
title_eng: String,
title_esp: String,
Id:String,
featured:Boolean,
active:Boolean,
slug:String,
video_link:String,
video_link_serie:[],
trailer_link:String,
making_Of:String,
categorie:[],
tag:[],
log_line_eng:String,
log_line_esp:String,
synopsis_eng:String,
synopsis_esp:String,
director:String,
writer:String,
cast:String,
production:String,
production_link:String,
cinematography:String,
editing:String,
sound:String,
post_production:String,
music:String,
year:Number,
country:String,
format:String,
language:String,
producer:String,
runtime:Number,
subtitle:String,
    
});

module.exports = mongoose.model("film", filmSchema);
