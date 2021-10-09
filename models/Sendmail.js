/** @format */

//dependencise
const sgMail = require('@sendgrid/mail');

//internal dependencise
const { sendgridInformation } = require('../variables/index');

const apiKey = sendgridInformation.apiKey;
sgMail.setApiKey(apiKey);

exports.sendOTP = (email, OTP) => {
  const msg = {
    to: email,
    from: {
      name: 'Send Grid',
      email: sendgridInformation.fromMail,
    },
    subject: 'OTP',
    text: `Your requested OTP is ${OTP} .\nPlease use within 3 minutes.\nNever share with anyone.`,
    html: `<p>Your requested OTP is <strong> ${OTP}</strong>.\nPlease use within 3 minutes.\nNever share with anyone.</p>`,
  };

  return sgMail.send(msg);
};
