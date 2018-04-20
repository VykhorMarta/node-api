const mongoose = require("mongoose");
const exspress = require('express');

const router = exspress.Router();

const Order = require("../models/order");

router.post('/add', (req, res) =>{
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        price: req.body.price
    }, {versionKey: false});
    order.save().then(result => {
        console.log(result);
        res.status(200).json({
            "message": "Added",
            "created": result
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            'error': err
            
        });
    });
});


router.get('/:orderId', (req, res)=> {
    const _id = req.params.orderId;
    Order.findById(_id).then(orderData => {
        console.log(orderData);
        res.status(200).json(orderData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
})


router.delete('/:orderId', (req, res)=> {
    const _id = req.params.orderId;
    Order.findByIdAndRemove({"_id":_id}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
})



module.exports = router;
