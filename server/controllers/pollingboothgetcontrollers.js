 
const pollingboothgetcontrollers=async (req,res)=>{
try{
 
res.status(200).send(req.rootUser)
}
catch(error){
res.status(404).send('Some technical issue');
}
}
module.exports=pollingboothgetcontrollers;