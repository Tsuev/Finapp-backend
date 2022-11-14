import User from "../models/UsersModel.js";

export async function getUsers(req, res) {

    let user = await User.find()
    console.log(user);
    res.json({})
}

export async function addUsers(req, res) {
    
    res.json(await User.create({name: req.body.name}));
}