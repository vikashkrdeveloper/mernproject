const pollingboothupdatecontrollers= async (req,res)=>{
try{
    const id=req.params.id;
    const result = await collection.updateOne(id, update);

}
catch(error){
res.status(404).send('Some technical issues');
}
}
module.exports=pollingboothupdatecontrollers;