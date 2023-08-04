const database = require('../modules/pollingbooth');
const pollingboothcontrollers = async (req, res) => {
    try {
        const { pbno, pbn, pco, winner, firstroundwin, marginper, margin, totalvoters, bjpvoters, bjpvotersperc, incvoters, incvotersperc } = req.body
        const finddata = await database.findOne({ pollingboothnumber: pbno })

        if (pbno && pbn && pco && winner && firstroundwin && marginper && margin && totalvoters && bjpvoters && bjpvotersperc && incvoters && incvotersperc) {
            if (finddata) {
                res.status(408).send(``)

            } else {
                const insertdata = new database({ pollingboothnumber: pbno, pollingboothname: pbn, parentconstituency: pco, winner, firstrunnerup: firstroundwin, marginpercentage: marginper, margine: margin, totalvoters, bjpvotes: bjpvoters, bjpvotespercentage: bjpvotersperc, incvotes: incvoters, incvotespercentage: incvotersperc })
                await insertdata.save();
                res.status(200).send('Data create complite');
            }
        }
        else {
            res.status(500).send('All field require')

        }
    }
    catch (error) {
        res.status(404).send('Sum techial')

    }
}
module.exports = pollingboothcontrollers;