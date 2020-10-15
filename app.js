/*
var express = require('express');
var app = express();
var request = require('request');
var ntpClient = require('ntp-client');

app.get('/', function(req, res, next) {
  var message =  "ทดสอบ" //req.body.message;

  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': "k1kc1HFm01mwwFy8wTgG3YnJc0ztsnIQDJZfwrknr4i"
    },
    form: {
      message: message
    }
  }, (err, httpResponse, body) => { res.send(200) });

});

app.listen(8080);

*/

var ntpClient = require('ntp-client');
var send_status = true;

while(1){
	setTimeout(function(){
		ntpClient.getNetworkTime("clock.nectec.or.th",123, function(err, date) {
			console.log(date)
			var message =  "ทดสอบส่งงเวลา"
				if(date.getHours() == 14 && date.getMinutes() == 5 && send_status == true){
					request({
						method: 'POST',
						uri: 'https://notify-api.line.me/api/notify',
						headers: {
						  'Content-Type': 'application/x-www-form-urlencoded'
						},
						auth: {
						  'bearer': "k1kc1HFm01mwwFy8wTgG3YnJc0ztsnIQDJZfwrknr4i"
						},
						form: {
						  message: message
						}
					  }, (err, httpResponse, body) => { res.send(200) });		 
					  send_status = false 	  
				}
			});
	},1000)


}
