import Payment from "../models/PaymentModel.js";

// export async function getUsers(req, res) {
//     res.json(await User.find());
// }

export async function addPayment(req, res) {
    let userArr = req.body?.userIds || [1];
    for(let el of userArr) {
        await Payment.create({sum: 500, userId: el})
    }

    res.json({message: 'Данные добавленны'});
}