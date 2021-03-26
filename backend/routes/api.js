const { default: userEvent } = require('@testing-library/user-event');
const express = require('express');

const Fauna = require('../db/models/fauna');

const router = new express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb) {
        cb(null,Date.now() + file.originalname);
    }
});

const _fileFilter = (req,file,cb) =>{

    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/JPG' || file.mimetype === 'image/PNG'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 5   
    },
    fileFilter: _fileFilter
});



router.get('/Fauna',async(req,res)=>{
    try{
        const filter = {}
        if(req.query.vernacularname){
            filter.vernacularName = new RegExp(req.query.vernacularname);
        }
        if(req.query.scientificname){
            filter.scientificName = new RegExp(req.query.scientificname);
        }
        console.log("Filter");
        console.log(filter);

        const bioentities = await Fauna.find(filter);
        console.log(bioentities);
        res.send(bioentities);
    }
    catch(e){
        res.status(500).send({
            message:'Error inesperado'
        }) 
    }
});

router.post('/Fauna',upload.single('faunaImage'),async(req,res)=>{
    try{
        console.log(req.file);
        const dataFauna = req.body;
        dataFauna.image = req.file.filename;

        const faunaEntity = new Fauna(dataFauna);
        await faunaEntity.save();
        res.send(faunaEntity);
    }
    catch(e){
        console.log(e);
        res.status(500).send({
            message:'Error inesperado en el POST'
    })
    }
})

router.use((req,res)=>{
    res.sendStatus(404)
});

module.exports = router;