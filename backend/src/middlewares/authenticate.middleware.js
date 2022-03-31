const jwt = require("jsonwebtoken");
const  newToken  = require("../config/jwt");
const User = require("../models/user.models");

const getUserByToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRECT_KET, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};

const authenticate = async (req, res, next) => {
  let token;
  let user;
  if (req.user) {
    const { email } = req.user;
    user = await User.findOne({ where: { email } });
    token = newToken(user);
  } else {
    // 1. read the req header
    const headers = req.headers;
    // 2. get the access token from headers
    const accesstoken = headers.accesstoken;
    // 3. if access token is not present in header, then 400
    if (!(accesstoken && accesstoken.startsWith("Bearer "))) {
      return res.status(400).send("User does not have access");
    }
    // get the user info from the token
    token = accesstoken.split(" ")[1];
    try {
      // if token exists then get the user and validate the token
      user = await getUserByToken(token);
      // if token matches with a user, allow him to go next
    } catch (e) {
      // else 400
      return res
        .status(400)
        .send("Authorization token was not provided or was not valid");
    }
    req.user = user.user;
  }

  return next();
};

module.exports = authenticate;
