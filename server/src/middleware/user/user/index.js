const User = require('../../models/user');
const validUser = async ( req, res , next) => {
    

    if (!req.session.userID)
        return res.status(403).send({
            message : 'not logged in ',
        });
    try {
        const user = await User.findOne({
            _id: req.session.userID,
        });
    if (!user) {
        return res.status(403).send({
            message : 'not logged in'
        });

    }

    req.user = user;
    } catch(error) {
        return res.status(403).send({
            message : 'not logged in ',
        })
    }
    next();
}

module.exports = {
    validUser,
}