const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    title: String,
    Id:String,
    featured:Boolean,
    active:Boolean,
    slug:String,
    video_link:String,
    video_link_serie:Array,
    trailer_link:String,
    making_Of:String,
    categorie:Array,
    tag:Array,
    log_line:String,
    synopsis:String,
    director:String,
    writer:String,
    cast:String,
    production:String,
    production_link:String,
    cinematography:String,editing:String,
    sound:String,
    post_production:String,
    music:String,
    year:Number,
    country:String,
    language:String,
    subtitle:String,
    runtime:Number,
    format:String,
    producer:String
});

module.exports = mongoose.model("film", filmSchema);
