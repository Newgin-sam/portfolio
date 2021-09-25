const express = require('express');
const app = express();
const cors = require('cors');
const sendMail = require('./mail');
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// test route
app.get('/api', (req, res) => {
    res.send("hello people!!");
})

//mail route
app.post('/api/mail', (req, res) => {
    console.log("mail sent !!", req.body)
    const isSend = sendMail(req.body);
    if (isSend) {
        res.status(200).json({
            status: 'sucsess',
            message: 'Mail sent !!'
        })
    } else {
        res.status(400).json({
            status: 'failed',
            message: 'Unable to send Mail !!'
        })
    }
})

app.use(express.static('client/build'));
if (process.env.NODE_ENV === 'production') {
    console.log("inside production00");
    const path = require('path');
    app.get('*', (req, res) => {
        console.log("inside send file", __dirname);
        res.sendFile(path.resolve(__dirname, './Client', 'build', 'index.html'))
    });
}

console.log(process.env.NODE_ENV);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(" serving started @", port);
})
