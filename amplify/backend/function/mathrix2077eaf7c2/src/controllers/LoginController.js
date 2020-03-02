const mongoose = require("mongoose");


require("../models/Student");

const config = require("../config");


const Student = mongoose.model("students");

// JSON Web Token Module
const jwt = require("jsonwebtoken");


RegisterStudent = (req, res, next) => {
    const payload = req.body;

    Student.findOne(
        {
            $or: [
                { mobile: req.body.mobile },
                { email: req.body.email }
            ]
        },
        (err, stud) => {

            if (stud) {

                const token = jwt.sign({ id: stud._id, mobile: stud.mobile, email: stud.email }, config.secretKey);
                return res.status(200).json({
                    token,
                    code: 202,
                    message: "Login Success",
                });
            } else {
                return res.status(200).json({
                    code: 401,
                    message: "Invalid Username or Password",
                });
            }
        }
    );








};

module.exports = RegisterStudent;