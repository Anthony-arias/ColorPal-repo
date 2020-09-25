const { User } = require('../models/user.model');
const { Palette } = require('../models/palette.model');
const bcrypt = require('bcrypt');
const myFirstSecret = process.env.FIRST_SECRET_KEY;
const jwt = require("jsonwebtoken")
const { request, response } = require('express');

module.exports.register = (request, response) => {
    User.create(request.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.FIRST_SECRET_KEY);
            response
                .cookie("usertoken", userToken, myFirstSecret, {
                    httpOnly: true
                })
                .json(user._id);
        })
        .catch(err => response.json(err));
}

module.exports.login = async (request, response) => {
    //console.log(cookies.usertoken);
    const user = await User.findOne({ email: request.body.email });
    if (user === null) return response.sendStatus(400);

    const corectPassword = await bcrypt.compare(request.body.password, user.password);
    if (!corectPassword) return response.sendStatus(400);

    const userToken = jwt.sign({
        id: user._id
    }, process.env.FIRST_SECRET_KEY)

    response
        .cookie("usertoken", userToken, myFirstSecret, {
            httpOnly: true
        })
        .json(user._id);
}

module.exports.logout = (request, response) => {
    response.clearCookie('userToken');
    response.sendStatus(200);
}

module.exports.createPalette = (request, response) => {
    const { owner } = request.body;

    console.log(typeof(owner))
    console.log(request.body);
    Palette.create(request.body)
        .then(thisPalette => {
            User.findByIdAndUpdate(owner, { $push: { palettes: thisPalette._id } })
                .then(user => { response.json(user) })
                .catch(error => response.json(error));
        })
        .catch(err => response.json(err));
}

module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(Users => { response.json(Users) })
        .catch(err => response.json(err));
}

module.exports.palettes = (request, response) => {
    //console.log(request.params.id);
    User.findById(request.params.id).populate("palettes")
        .then(Palettes => { response.json(Palettes.palettes) })
        .catch(err => response.json(err));
}