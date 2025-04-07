const express = require("express")

const app = express()

app.use(express.json())

app.get("/ping",(req,res)=>{
    return res.status(200).send({message:"pong"});
})

app.get("/userdata",(req,res)=>{
    try {
        return res.status(200).send({message:"created successfullt"});
    } catch (error) {
        return res.status(500).send({message:"Some thing went wrong"});
    }
})


app.post("/userfield",(req,res)=>{
    try {
        const {username,email,password,dateofbirth}=req.body
        if(!username){
            return res.status(400).send({message:"Username cannot be empty"});
        }
        if(!email){
            return res.status(400).send({message:"Email cannot be empty"});
        }
        if(password.length < 8 || password.length > 16 ){
            return res.status(400).send({message:"Password length should be greater than 8 or less than 16 or equal to 16"});
        }
        if(!dateofbirth){
            return res.status(400).send({message:"please provide date of birth"});
        }

        return res.status(201).send({message:"Created successfully"});
    } catch (error) {
        return res.status(500).send({message:"Some thing went wrong"});
    }
})
app.listen(8080,()=>{
    console.log("Server connected");
})
