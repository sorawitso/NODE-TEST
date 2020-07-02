/* async */
/*
async function setTimeoutAndLog(input, millisec) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(input)
            resolve()
        }, millisec)
    });
}

(async () => {
    await setTimeoutAndLog("a", 1000);
    await setTimeoutAndLog("b", 1000);
    await setTimeoutAndLog("c", 1000);
    await setTimeoutAndLog("d", 1000);
}) ();
*/
/*
const myConst = 1;
try {
  myConst = 2;
} catch (exception) {
  console.error(exception);
}
*/
/*
const fetch = require("node-fetch")

async function getUser() {
    try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(response.status)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

(async () => {
    getUser();
})();
*/

/*

var express = require('express')
var app = express()

app.use(express.static('./public/'))

var userRoute = require('./userRoute')
app.use('/dog', userRoute)

var catRoute = require('./catRoute')
app.use('/cat', catRoute)
*/

const express = require('express');

const {intercepter} = require('./middIeware/logMiddleware');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(express.static('./public/'))
app.use(express.json());
app.use(intercepter);

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(3000);


