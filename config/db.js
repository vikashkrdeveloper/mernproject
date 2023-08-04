const mongoose =require('mongoose');
const databaseaddress= process.env.DATABAE_ADDRESS;

mongoose.connect(databaseaddress)
.then(()=>{
    console.log('Database connected');
})
.catch(()=>{
    console.log('database not connected ');
})

module.exports=mongoose;