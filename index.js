const express = require('express');
const app = express();
const cors = require('cors');
const sendMail = require('./mail');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello people!!");
})

app.post('/mail', (req, res) => {
    console.log("mail sent !!", req.body)
    const isSend = sendMail(req.body);
    if (isSend) {
        res.status(200).json({
            status: 'sucsess',
            message: 'Mail sent !!'
        })
    }
    res.status(400).json({
        status: 'failed',
        message: 'Unable to send Mail !!'
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(" serving started @", port);
})
