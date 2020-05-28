// refactoring ts

import * as express from 'express';
const app = express();

app.get('/', (request: express.Request, response : express.Response)=>{
	response.send('Hello world!');
});

app.listen(3000, ()=>{
	console.log("listen 3000");
});