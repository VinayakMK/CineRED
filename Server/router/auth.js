const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate")

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('from server router');
});

router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the field" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password doesn't match" });
        } else {
            const user = new User({ name, email, phone, password, cpassword });

            await user.save();

            res.status(201).json({ message: "User registered successfully!" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                return res.status(400).json({ error: "Invalid password credentials" });
            }

            token = jwt.sign({ _id: userLogin._id }, process.env.SECRET_KEY);
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            res.json({ message: "User signed in successfully!" });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/profile', authenticate, (req, res) => {
    console.log('Hello My Profile');
    res.send(req.rootUser)
});


router.get('/getdata', authenticate, (req, res) => {
    console.log('Hello contact');
    res.send(req.rootUser)
});

router.post('/contact', authenticate, async (req, res) => {
    try {
        const {name, email, phone, message } = req.body;

        if(!name || !email || !phone || !message) {
            console.log("Error in contact form");
            return res.json({error:"Please fill the contact form"});
        }
        const userContact = await User.findOne({_id: req.userID});

        if(userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({message:"User contacted successfully"})
        }

    } catch(error) {
        console.log(error);
    }
});

router.get('/signout', (req, res ) => {
    console.log('User Logged out ');
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('User Logout');
});

module.exports = router;
