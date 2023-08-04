const database = require('../modules/schema');
const hasingpassword = require('../helper/hash');
const comparepasswordfun = require('../helper/compare');
const registercontrollers = async (req, res) => {
  try {
    const { name, email, username, phone, password, conformpassword } = req.body;
    const finddata = await database.findOne({ email });
    const hashpassword = await hasingpassword(password);
    const comparepassword = await comparepasswordfun(conformpassword, hashpassword);
    if (name && email && username && phone && password && conformpassword) {
      if (finddata) {
        res.status(201).send('Email id already exist pleased login');
      }
      else {
        if (comparepassword) {
          const insertdata = new database({ name, email, username, phone, password: hashpassword});
          await insertdata.save();
          res.status(200).send("Sucessfully")
        }
        else {
          res.status(401).send('Password and conform password are not matched');

        }

      }
    }
    else {
      res.status(500).send('All field require');
    }



  }
  catch (error) {
    res.status(404).send('Sum technical issue' + error);
  }


}
module.exports = registercontrollers;