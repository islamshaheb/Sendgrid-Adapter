/** @format */

'use strict';

//internal dependencies
const sendMail = require('../models/Sendmail');

exports.send = async (ctx) => {
  const email = ctx.request.body.email;
  const purpose = ctx.request.body.purpose;
  const OTP = ctx.request.body.OTP;

  const tempPurpose = purpose.toUpperCase(); // otp, OTP,oTP and same other things are also valid

  switch (tempPurpose) {
    case 'OTP':
      sendMail.sendOTP(email, OTP);
      ctx.body = {
        message: 'Your OTP is sending through your email..',
        data: null,
      };
      break;
    default:
      ctx.body = {
        message: purpose + ' is not a valid purpose',
        data: null,
      };
      break;
  }
};
