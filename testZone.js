import mongoose from 'mongoose';
import dbStart from './db/db.js';
import Payment from './models/PaymentModel.js'
import User from './models/UsersModel.js'
dbStart();

const ObjectId = mongoose.Types.ObjectId
async function getSome() {
    let user = await User.find()
    let users = []

    user.forEach( (el) => {
        
        
        let userDate = {
            id: el.i,
            name: el.name,
            totalSum: 0,
            createdAt: el.createdAt,
        }

        Payment.aggregate([{
            $match: { userId: ObjectId(el.id) }
        },
        { $group: { _id: null, totalSum: { $sum: "$sum" } } }])
        .then((date) => date = user.totalSum = date[0]?.totalSum )
        .then((date) => console.log(users));

        // totalSum = totalSum[0]?.totalSum;




        users.push(userDate)
    })



}

getSome();

