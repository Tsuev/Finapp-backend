import Payment from "../models/PaymentModel.js";

// export async function getUsers(req, res) {
//     res.json(await User.find());
// }

export async function addPayment(req, res) {
    console.log(req.body.userId);
    res.json(await Payment.create({sum: 500, userId: req.body.userId}));
}