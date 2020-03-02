const mongoose = require("mongoose");


require("../models/Student");


const Student = mongoose.model("students");


RegisterStudent = (req, res, next) => {
    const payload = req.body;
    const data = {
        student_name: payload.student_name,
        college_name: payload.college_name,
        college_id: payload.college_id,
        department: payload.department,
        year: payload.year,
        mobile: payload.mobile,
        email: payload.email,
        items: payload.items
    };

    let am = 0;

    let sub = [];

    data.items.forEach(i => {
        let d = {
            item:'',
            amount:''
        }
        if (i.value === 'EVENT') {
            am += 150;
            d.item = i.value;
            d.amount = 150;
        }
        if (i.value === 'CLOUD') {
            am += 300;
            d.item = i.value;
            d.amount = 300;
        }
        if (i.value === 'IOT') {
            am += 300;
            d.item = i.value;
            d.amount = 300;
        }  
    });

    var request = require('request');

    var headers = { 'X-Api-Key': '4d9d7f99d562abf1716e0891eb75449b', 'X-Auth-Token': 'a4194918352d5c7a04241276df2a4338' }
    var trans = {
        purpose: 'MATHRIX 2020',
        amount: 10,
        phone: data.mobile,
        buyer_name: data.student_name,
        redirect_url: 'https://mathrix.in/payment/',
        send_email: true,
        webhook: '',
        send_sms: true,
        email: data.email,
        allow_repeated_payments: false
    }

    request.post('https://www.instamojo.com/api/1.1/payment-requests/', { form: trans, headers: headers }, function (error, response, body) {
        if (!error && response.statusCode == 201) {
            let a = JSON.parse(response.body);
            let b = a.payment_request;
            const pd = {
                student_name: payload.student_name,
                college_name: payload.college_name,
                college_id: payload.college_id,
                department: payload.department,
                year: payload.year,
                mobile: payload.mobile,
                email: payload.email,
                items: payload.items,
                amount:am,
                payment_id:b.id,
                subscriptions:sub
            }
            Student.findOne(
                {
                    $or: [
                        { mobile: req.body.mobile },
                        { email: req.body.email }
                    ]
                },
                (err, stud) => {
        
                    // if (stud) {
        
                    //     res.status(200).json({
                    //         code: 262,
                    //         message: "Account Already Exists"
                    //     });
                    // } else 
                    //{
                        const student = new Student(pd);
                        student.save()
                            .then(() => {
                                // const sgMail = require("@sendgrid/mail");
                                // sgMail.setApiKey(constants.emailKey);
                                // const msg = {
                                //     to: data.email,
                                //     from: "notifications@tapzule.in",
                                //     subject: "Registration Successful",
                                //     text: "Error sending mail to you . contact customer care",
                                //     html: mail
                                // };
                                // sgMail.send(msg);
                                res.status(200).json({
                                    status : 201,
                                    url : b.longurl
                                })
                            }).catch(() => {
                                res.status(250).json({
                                    code: 262,
                                    message: "Error While Registering"
                                });
                            });
                    //}
                }
            );
            
        }
        else {
            res.status(200).json({
                status : 202,
                message : "Failure"
            })
        }
    })


    









};

module.exports = RegisterStudent;