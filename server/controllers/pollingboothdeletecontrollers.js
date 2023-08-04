const database = require('../modules/pollingbooth');
const pollingboothdeletecontrollers = async (req, res) => {
    try {
              
        const deletequery = await database.deleteOne({_id:req.params.id})
        res.status(200).send();

    }
    catch (error) {
        res.status(404).send('Some technical isses');
    }

}
module.exports = pollingboothdeletecontrollers;