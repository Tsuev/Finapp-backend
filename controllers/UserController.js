import User from "../models/UsersModel.js";
import generateUsers from "../handler/UsersGenerator.js";

export async function getUsers(req, res) {
    res.json(await generateUsers());
}

export async function addUsers(req, res) {
    res.json(await User.create({name: req.body.name}));
}