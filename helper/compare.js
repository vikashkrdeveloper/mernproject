const bcrypt =require('bcrypt');

const comparepaswordfun=async (password,hashpassword)=>{

    const comparepassword=await bcrypt.compare(password,hashpassword);
    return comparepassword;

}

module.exports=comparepaswordfun