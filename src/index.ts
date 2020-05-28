/*
	var express = require("express");
	var app = express();

	app.get('/', function(request, response){
		response.send('hello ts-node-express');

	});

	app.listen(3000, function(){
		console.log("Example app listening on port 3000!");
	});https://youtu.be/ql9-82oV2JE
*/
// refactoring ts

import * as express from 'express'
const app = exrpess();

app.get('/', (request: express.Request, response : express.Response)=>{
	res.send('Hello world!');
});

app.listen(3000, ()=>{
	console.log("listen 3000");
});