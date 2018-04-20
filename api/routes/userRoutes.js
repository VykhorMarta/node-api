const User = require("../models/user")
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        "message" : "Hello world"

    })
})

router.post('/', (req, res) => {
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name
        });
    user.save().then(result => {
        console.log(result);
        res.status(201).json({
            "message": "Handling POST request to users",
            "createdUser": result
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            'error': err
            
        });
    });

})

router.get('/:userId', (req,res)=> {
    const _id = req.params.userId;
    User.findById(_id).then(userData => {
        console.log(userData);
        res.status(200).json(userData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
})
module.exports = router;

