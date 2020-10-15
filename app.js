
var express = require('express');
var app = express();
var request = require('request');
var ntpClient = require('ntp-client');

app.set ( "view engine", "ejs" );

app.get ( "/", function ( req, res ) 
	{
		res.render ( "homepage" );		
	}
)

app.listen (80,function(){
	console.log("Server runing...")
});