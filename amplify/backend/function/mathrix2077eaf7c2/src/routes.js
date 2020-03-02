const express = require("express");

const router = express.Router();

const RegisterController = require("./controllers/RegisterController");

const LoginController = require("./controllers/LoginController");

router.post("/register", RegisterController);

router.post("/login", LoginController);

router.post("/check", (req, res, next) => {
    let prid = req.body.payment_request_id;
    let pid = req.body.payment_id;
    let pstat = req.body.payment_status;
    var request = require('request');

    var headers = { 'X-Api-Key': '4d9d7f99d562abf1716e0891eb75449b', 'X-Auth-Token': 'a4194918352d5c7a04241276df2a4338' }
    request.get(
        'https://www.instamojo.com/api/1.1/payment-requests/'+prid+'/'+pid+'/',
        { form: payload, headers: headers }, function (error, response, body) {
            if (!error && response.statusCode == 200) { console.log(body) }
        })

})

//EC2 Instance health check

router.get('/healthCheck', (req, res, next) => {
    res.status(200);
    res.end('OK');
});

// Setting 404 response for all other requests
router.use((req, res, next) => {
    const error = new Error("Page Not found");
    error.status = 404;
    next(error);
});

//Server Error
router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = router;