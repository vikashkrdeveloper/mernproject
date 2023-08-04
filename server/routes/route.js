const express = require('express');
const route = express.Router();
const homecontrollers = require('../controllers/homecontrollers');
const registercontrollers = require('../controllers/registercontrollers');
const userlogincontrollers = require('../controllers/userlogincontrollers');
const subadminpanelcontrollers = require('../controllers/subadminpanelcontrollers');
const adminauthentication = require('../middleware/adminauthentication');
const authcontrollers = require('../controllers/authcontrollers');
const authentication = require('../middleware/authentication');
const logoutcontrollers = require('../controllers/logoutcontrollers');
const auth = require('../middleware/auth');
const pollingboothcontrollers = require('../controllers/pollingboothcontrollers')
const pollingboothgetcontrollers = require('../controllers/pollingboothgetcontrollers')
const pollingboothdeletecontrollers = require('../controllers/pollingboothdeletecontrollers')
const getdata = require('../middleware/getdata');
const pollingboothupdatecontrollers=require('../controllers/pollingboothupdatecontrollers')
route.get('/', homecontrollers)
route.post('/register', registercontrollers)
route.post('/login', userlogincontrollers)
route.get('/subadminpannel', adminauthentication, subadminpanelcontrollers)
route.get('/user/dashboard/pannel', auth, subadminpanelcontrollers)
route.get('/getdata', authentication, authcontrollers)
route.get('/logout', logoutcontrollers)
route.post('/pollingbooth/data', pollingboothcontrollers)
route.delete('/pollingbooth/data/delete/:id', pollingboothdeletecontrollers)
route.patch('/pollingbooth/data/update/:id', pollingboothupdatecontrollers)
route.get('/pollingbooth/data', getdata, pollingboothgetcontrollers)


module.exports = route;