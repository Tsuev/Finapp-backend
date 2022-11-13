import User from "../models/UsersModel.js";

export async function getUsers(req, res) {
    res.json(await User.find());
}

export async function addUsers(req, res) {
    
    res.json(await User.create({name: req.body.name}));
}