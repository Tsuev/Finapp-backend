import Payment from '../models/PaymentModel.js'
import User from '../models/UsersModel.js'


function getYearAndMonth(date) {
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`
}

let currentDate = getYearAndMonth(new Date());

async function generateUsers() {


    let userCollection = await User.find()
    let payment = await Payment.find();
    let users = []

    userCollection.forEach((user) => {

        let userDate = {
            id: user.id,
            name: user.name,
            totalSum: 0,
            createdAt: user.createdAt,
            currentPaid: false,
        }

        payment.forEach((el) => {
            let payDate = getYearAndMonth(el.createdAt);
            if (el.userId == user.id) {
                userDate.totalSum += el.sum;
                if(payDate == currentDate){
                    userDate.currentPaid = true;
                }
            }
        })

        users.push(userDate)
    })

    return users;
}

export default generateUsers;