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
                .json({ msg: "success!"});
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
        .json({ msg: "success!" })
}

module.exports.logout = (request, response) => {
    response.clearCookie('userToken');
    response.sendStatus(200);
}

module.exports.createPalette = (request, response) => {
    let userId = jwt.decode(request.cookies.usertoken).id
    //if (!userId) response.json("error no user found");
    User.findByIdAndUpdate(userId, { $push: { palettes: "5f6d6efd02966d1bb0ccf214" }})
        .then(Users => { response.json(Users) })
        .catch(err => response.json(err));
        /*console.log(userId);
    Palette.create(request.body)
        .then(newPalette => {
            User.findOne({_id: userId}).populate()
                .then(response => response.json(response))
                .catch(error => response.json(error))
            response.newPalette(newPalette);
        })*/
        //.catch(error => response.json(error))
}

module.exports.getAllUsers = (request, response) => {
    //console.log(jwt.decode(request.cookies.usertoken).id);
    //let userId = jwt.decode(request.cookies.usertoken).id
    User.findOne({_id: "5f6aadcd921c0117ec52a6d8"}).populate("palettes")
        .then(Users => { response.json(Users) })
        .catch(err => response.json(err));
}

module.exports.test = (request, response) => {
    console.log(jwt.decode(request.cookies.usertoken).id);
    //console.log(request.cookies.usertoken)
}

module.exports.palettes = (request, response) => {
    Palette.find({})
        .then(Palettes => { response.json(Palettes) })
        .catch(err => response.json(err));
}