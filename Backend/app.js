const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./db/connection');
const bycrypt = require('bcryptjs');

// middleware
app.use(express.json());


// checking connection

db.once("open", function(){
    console.log("Connection successful");
})
// Contact us
app.post("/", async (req, res) => {
    try {
        const contact45 = new contact({
            name: req.body.name,
            email: req.body.email,
            desc: req.body.desc,
        })
        const vivo = await contact45.save();
        // window.alert("Message send success")
        res.status(201).render("/");
    } catch (e) {
        res.status(404).send(e);
    }
})
  
// Registration
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const confirm_pass = req.body.confirm_pass;
        if (password === confirm_pass) {
            const registerEmpl = new register({
                name: req.body.lname,
                password: req.body.password,
                email: req.body.email,
            })
            // console.log(token);
            const the = await registerEmpl.save();
            res.status(201).render("/");
        }
    } catch (e) {
        res.status(404).send(e);
    }
})
  
//login
app.post('/login', async (req, res) => {
    try {
        const password = req.body.password;
        const email = req.body.email;
        const mouse = await register.findOne({ email: email });
        const mouse1 = await register.findOne({ password: password });
        if (mouse==mouse1) {
            res.status(201).render("/");
        }
        else {
            res.status(404).send("password are not matching")
            // alert("password or email are not matching");
        }
    } catch (error) {
        res.status(404).send("invalid email or password" + error);
    }
})








//listening
app.listen(port, () => {
    console.log(`the server listen on localhost:${port}`);
})