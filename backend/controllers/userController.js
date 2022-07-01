const User = require('../models/userModel');
module.exports = {
    create: (req, res) => {
        const new_user = new User();
        new_user.name = req.body.name;
        new_user.email = req.body.email;
        new_user.password = req.body.password;
        new_user.image = req.body.image;
        new_user.status = req.body.status;
        new_user.save((err, user) => {
            err ? res.status(500).send(err) : res.status(201).json(user);
        });
    },
    findOne: (req, res) => {
        User.findById({ _id: req.params.id }, (err, user) => {
            err ? res.status(404).send(err) : res.status(200).json(user);
        });
    },
    findAll: (req, res) => {
        User.find({}, (err, users) => {
            err ? res.status(404).send(err) : res.status(200).json(users);
        });
    },
    update: (req, res) => {

        User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }, (err, user) => {
            err ? res.status(404).send(err) : res.status(200).json(user)
        })

        // User.findById({ _id: req.params.id }, (err, user) => {
        //     if (req.body.name) { user.name = req.body.name };
        //     if (req.body.email) { user.email = req.body.email };
        //     if (req.body.password) { user.password = req.body.password };
        //     if (req.body.image) { user.image = req.body.image };
        //     if (req.body.status) { user.status = req.body.status };


        //     user.save(() => {
        //         err ? res.status(404).send(err)
        //             : res.status(200).json(user);
        //     });
        // });
    },
    delete: (req, res) => {
        User.findByIdAndRemove({ _id: req.params.id }, (err) => {
            err ? res.status(404).send(err)
                : res.status(200).json({ message: 'Book Deleted!' });
        });
    }

};





