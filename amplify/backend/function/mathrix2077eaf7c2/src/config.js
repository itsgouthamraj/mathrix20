let config = {};

config.port = process.env.PORT || 5000;

config.emailKey = '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';

//mongodb://root:<password>@logc-shard-00-00-treit.mongodb.net:27017,logc-shard-00-01-treit.mongodb.net:27017,logc-shard-00-02-treit.mongodb.net:27017/test?ssl=true&replicaSet=LogC-shard-0&authSource=admin&retryWrites=true&w=majority

config.db = 'mongodb://goutham:mC9mWvarNA6NKexM@mathrix20-shard-00-00-5swyf.mongodb.net:27017,mathrix20-shard-00-01-5swyf.mongodb.net:27017,mathrix20-shard-00-02-5swyf.mongodb.net:27017/test?ssl=true&replicaSet=mathrix20-shard-0&authSource=admin&retryWrites=true&w=majority';

config.secretKey = 'AhbYvvj@gvgjcggsv7845igyi+-';

config.sendOtpAPIKey = '301503A03DRHhp5dba7cef';

// config.regSuccessMessage = "{{otp}} is your Tapzule verification code . Do not share this with anyone";

config.regSuccessMessage = "Welcome to LOGIT PRO , use the code {{otp}} to activate your device for the first time";

config.senderID = "LOGITP";

config.otpExpiryTime = '10';

module.exports = config;