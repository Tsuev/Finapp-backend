import Payment from "../models/PaymentModel.js";
import User from "../models/UsersModel.js";

function getYearAndMonth(date) {
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`
}
let currentDate = getYearAndMonth(new Date());

// — всего собрано [int] x
// — всего участников [int] x
// — собрано за настоящий месяц [int] +
// — рекордная сумма среди всех месяцев [int]  +




async function generateStatistic() {
    let statistic = {};
    let payments = await Payment.find();
    let allMonthPayments = {};

    let totalSum = 0;
    let users = await User.count();
    let monthPayments = 0;
    
    payments.forEach((el) => {

        totalSum += el.sum;
        let payDate = getYearAndMonth(el.createdAt);
        if (payDate == currentDate) {
            monthPayments += el.sum;
        }
        if(!allMonthPayments[`${payDate}`] ) {
            allMonthPayments[`${payDate}`] = 0;
        }
        allMonthPayments[`${payDate}`] += el.sum;        
        
    })

    statistic.totalSum = totalSum;
    statistic.totalUsers = users;
    statistic.monthPayments = monthPayments;
    statistic.recordMonth = Object.entries(allMonthPayments).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr);


    return statistic;
}

export default generateStatistic;
