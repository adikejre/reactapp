const express = require('express');
const logger = require('morgan');
const cors = require('cors');
var request = require('request');
//const proxy = require("http-proxy-middleware");

const app = express();
//app.use(cors())
// app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// module.exports = app => {
//     app.use(
//       "/runcode",
//       proxy({
//         target: "http://localhost:4000",
//         changeOrigin: true,
        
//       })
//     );
//   };

app.get('/runcode',(req,res)=>{
    res.send("hello wrld");
})

app.post('/runcode',(req,res)=>{
    var myinfo={
        "mscript":req.body.selectedText,
        "mylang":req.body.lang
    }
    //res.send('helooo');
    console.log(myinfo.mscript,"script got");

    const jsondata={
        "script" : myinfo.mscript,
        "language": myinfo.mylang,
        "versionIndex": "1",
        "clientId": "9c2f22709b6836da6a6dc0adb4684c9b",
        "clientSecret":"850acdb2fed73d6920cc3de9f2c99e25967c813e230f8d0870fc49b5270da9cc"
    
    };

    var outputbody=[];

    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: jsondata
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
        //outputbody=body;
    });

   // console.log("outpbody",outputbody);
    //res.send(outputbody);

})


app.listen(4000)



