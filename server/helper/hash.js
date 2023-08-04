const bcrypt = require('bcrypt');
const hasing = async (password) => {
    const hasingsalt = 10;
    const hasingpassword = await bcrypt.hash(password, hasingsalt);
    return hasingpassword;
}
module.exports = hasing;