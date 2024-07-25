
require('dotenv').config();

const { UserController } = require("../models/UsersModel");
const jwt = require('jsonwebtoken');
const axios = require("axios");
const {OtpController} = require("../models/Otpmodel");
const nodemailer = require('nodemailer');




const path = require("path");

function doLogin(req, resp) {

    UserController.findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                if (req.body.password === result.password) {
                    // let currentTime = new Date().getTime();
                    let skey=process.env.SEC_KEY; 
                    let token=jwt.sign({result},skey,{expiresIn: "5m"});

                    resp.json({status:true, res:result,jtoken:token});
                } else {
                    resp.json({ status: false, message: "Invalid password" });
                }
            } else {
                resp.json({ status: false, message: "Invalid user" });
            }
        })
        .catch((err) => {
            console.error(err);
            resp.json({ status: false, message: "Error occurred" });
        });
}

async function dogetOtp(req, resp)
{
    console.log(req.body.email);
    const data = await UserController.findOne({email:req.body.email});

    if(data)
        {
            let otp = Math.floor((Math.random()*10000)+1);
            let otpData = new OtpController({
                email: req.body.email,
                code: otp,
                expireIn: new Date().getTime() + 300*1000
            })

            await otpData.save().then((result)=>{
                mailer(req.body.email,otp);
                resp.json({ status: true, message: "Check your email for otp" });
     

            }).catch((err)=>{
                console.error(err);
                resp.json({ status: false, message: "Error occurred" });
            });


        }
    else{
        resp.json({ status: false, message: "User doesn't exist" });

    }
}

const verifyOTP = async(req,resp)=>{
    let data = await OtpController.find({email:req.body.email, code: req.body.otp});
    if(data)
        {
            let cuurentTime = new Date().getTime();
            let diff = data.expireIn - cuurentTime;
            if(diff<0)
                {
                    resp.json({ status: false, message: "Otp expired" });
                }
            else
            resp.json({ status: true, message: "chnge pass" });

        }
    else
    {
        resp.json({ status: false, message: "err" });
    }
}

const changePass = async(req, res)=>{
    UserController.updateOne({email:req.body.email},{$set:{password:req.body.password}}) 
      .then(function (result) {
        if(result.matchedCount==1)
        res.json({status:true,msg:"Updated Password"});
        else
        res.json({status:false,msg:"Invalid Item"});  
      })
      .catch(function () {
        res.json({ err: "error" });
      });


}

const mailer = (email,otp)=>{
    // https://stackoverflow.com/questions/45478293/
    // username-and-password-not-accepted-when-using-nodemailer
    
    // https://myaccount.google.com/lesssecureapps
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 3007,
    secure: false,
    auth: {
    user: process.env.My_email,
    pass: process.env.My_sec_pass
    }    
    });
    
    var mailoptions = {
    from: 'parnoork24@gmail.com',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'Thank you sir !... Your otp is '+otp
    }
    
    transporter.sendMail (mailoptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console. log('Email sent: '+ info.response);
    
    }
});}


module.exports = { doLogin, dogetOtp , verifyOTP, changePass};