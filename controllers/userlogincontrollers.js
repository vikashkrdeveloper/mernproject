const database = require('../modules/schema');
const comparepasswordfun = require('../helper/compare');
const userlogincontrollers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finddata = await database.findOne({ email });
        if (email && password) {
            if (finddata) {
                const comparepassword = await comparepasswordfun(password, finddata.password);
                if (comparepassword) {
                   const token= await finddata.generatetoken();
                   res.cookie('jwttokens',token);
                    res.status(200).send('Login sucessfully');

                }
                else {
                    res.status(403).send('Invalid login details');

                }
            }
            else {
                res.status(403).send('Invalid login details');
            }



        }
        else {
            res.status(500).send('All field require');
        }
    }
    catch (error) {
        res.status(400).send('Some technical issue');
    }
}
module.exports = userlogincontrollers;