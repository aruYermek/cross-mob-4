const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
app.use(express.json());

const mongoUrl = "mongodb+srv://yermekaru:FMbPtlmpMevlnAhb@cluster0.cujhpfd.mongodb.net/";

const JWT_SECRET="secret"
mongoose.connect(mongoUrl).then(()=>{
    console.log("DB connected")
}).catch((e)=>{
    console.log(e)
})
app.get("/",(req,res)=>{
    res.send({status:"started"})
});
require('./Users')
const User = mongoose.model("UserInfo");


app.post('/register',async(req,res)=>{
    const {name, email, password} = req.body;

    const oldUser = await User.findOne({email: email});

    if (oldUser) {
        return res.send({data: "User already exist"})    
    }

    try {
        await User.create({
            name:name,
            email: email,
            password,
        });
        res.send({status: "ok", data: "User created"})

    } catch (error) {
        res.send({status: "error", data: error})
    }

});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
        return res.send({ data: "Register please!" });
    }

    if (password === oldUser.password) {
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
        return res.send({ status: "ok", data: token });
    } else {
        return res.send({ data: "Incorrect password" });
    }
})

app.post("/userdata", async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;

        User.findOne({ email: useremail }).then((data) => {
            return res.send({ status: "ok", data: data });
        });
    } catch (error) {
        return res.send({ error: error });
    }
});


app.listen(5001,()=>{
    console.log('Server started')
})