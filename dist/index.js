"use strict";
// refactoring ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.listen(3000, () => {
    console.log("listen 3000");
});
