const express = require('express')
const mailer = require('nodemailer')
const app = express();

let transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user:'hoangthanh0310204@gmail.com',
        pass:'bpax twys rtwb ujno'
    }
})
//gửi mail
let mailoption = {
    from:'hoangthanh0310204@gmail.com',
    to:'thanhhtph40777@fpt.edu.vn',
    subject:'Test mail lab 4',
    text:'Mail test okkkk'
}

transporter.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Thành công: '+ info.messageId);
    }
})

const port = 3000
app.listen(port,()=>{
    console.log('Server run port'+ port);
})