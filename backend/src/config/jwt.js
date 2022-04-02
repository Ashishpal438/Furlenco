const jwt = require("jsonwebtoken");

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SCERECT_KEY)
}
module.exports = newToken;