import generateStatistic from "../handler/StatisticGenerator.js";


async function getStatistic(req, res) {
    res.json(await generateStatistic());
}

export default getStatistic;