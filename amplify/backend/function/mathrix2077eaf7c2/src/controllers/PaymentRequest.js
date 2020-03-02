var request= require('request');

var headers = { 'X-Api-Key': '4d9d7f99d562abf1716e0891eb75449b', 'X-Auth-Token': 'a4194918352d5c7a04241276df2a4338'}
var payload = {
  purpose: 'MATHRIX',
  amount: '750',
  phone: '7358551096',
  buyer_name: 'GOutham',
  redirect_url: 'http://www.mathrix.in/redirect/',
  send_email: true,
  webhook: 'http://www.mathrix.in/webhook/',
  send_sms: true,
  email: '',
  allow_repeated_payments: false}

request.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers}, function(error, response, body){
  if(!error && response.statusCode == 201){
    console.log(body);
  }
  else{
      console.log(response);
  }
})
