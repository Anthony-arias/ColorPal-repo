const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const myFirstSecret = process.env.FIRST_SECRET_KEY;
const jwt = require("jsonwebtoken")
const { request, response } = require('express');

module.exports.register = (request, response) => {
    User.create(request.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            response
                .cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => response.json(err));
}

module.exports.login = async(request, response) => {
    const user = await User.findOne({ email: request.body.email });
    if (user === null) return response.sendStatus(400);

    const corectPassword = await bcrypt.compare(request.body.password, user.password);
    if (!corectPassword) return response.sendStatus(400);

    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY)

    response
        .cookie("usertoken", userToken, secret, {
            httpOnly: true
        })
        .json({msg: "success!"})
}

module.exports.logout = (request, response) => {
    response.clearCookie('userToken');
    response.sendStatus(200);
}

module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(Users => { response.json(Users) })
        .catch(err => response.json(err));
}