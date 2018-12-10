var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nodesourabh@gmail.com',
      pass: 'node_sourabh123!'
    }
  });
  
  var mailOptions = {
    from: 'nodesourabh@gmail.com',
    to: 'sourabh.karmarkar@synerzip.com,ruturaj.doiphode@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h2>That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });