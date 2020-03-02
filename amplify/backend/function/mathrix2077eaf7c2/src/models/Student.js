const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    student_name : {
        type:String,
        required:true,
    },
    college_name : {
        type:String,
        required:true,
    },
    college_id : {
        type:String,
        required:true
    },
    department : {
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    mobile : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    payment_id : {
        type:String,
        required:true
    },
    payment_status:{
        type:Boolean,
        required:true,
        default:false
    },
    amount:{
        type:String,
        required:true
    },
    subscriptions : [
        {
            item:String,
            amount:String,
        }
    ],
    
});

mongoose.model("students",StudentSchema);
