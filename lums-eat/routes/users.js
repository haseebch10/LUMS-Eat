const router = require('express').Router();

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({
            'Status': 'Failed',
            'Message': `${err}`
        }))
});

router.route('/add').post((req, res) => {
    const userID = req.body.userID;
    const username = req.body.username;
    const email = req.body.email;
    const address = req.body.address;
    const number = req.body.number;

    const newUser = new User({
        userID,
        username,
        email,
        address,
        number
    });

    newUser.save()
        .then(() => res.json({
            'Status': 'Success',
            'Message': `Done`
        }))
        .catch((err) => res.status(400).json({
            'Status': 'Failed',
            'Message': `${err}`
        }))
    
})

module.exports = router;