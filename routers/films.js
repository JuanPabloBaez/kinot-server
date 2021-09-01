const express = require("express");
const router = express.Router();
const filmSchema = require("../models/filmModel")

router.get("/", (req,res) => {
    //get all films from db 
    filmSchema.find({}, (err, data) => res.send(data));
} )

router.get("/:slug", async (req,res) => {
    //get aone film from db
    try {
        const film = await filmSchema.findOne({slug: req.params.slug});
        res.send(film);
    } catch {
        res.status(404);
        res.send({ error: "Film doesn't exist!" });        
    }
} );

module.exports = router;