const database = require('../modules/pollingbooth')
const getdata = async (req, res, next) => {
    try {
        const rootUser = await database.find();
        req.rootUser = rootUser;
        req.Userid = rootUser._id;
        next();
    }
    catch (error) {
        res.status(404).send('User not login');
    }

}
module.exports = getdata;