var express = require('express');
var app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    return res.send('Welcome to NodeJS Application on AWS EC2 using Terraform, Ansible and Docker');
});

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});