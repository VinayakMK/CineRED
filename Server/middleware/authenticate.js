const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");


const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyToken);

        //const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token":token });
        const rootUser = await User.findById(verifyToken._id)
        
        if (!rootUser) { throw new Error('User not Found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    }catch (err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = Authenticate;