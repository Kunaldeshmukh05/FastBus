import jwt from 'jsonwebtoken';

// CREATE tokens (takes payload, returns token string)
const generateAccessToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

const generateRefreshToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

// VERIFY tokens (takes token string, returns decoded payload)
const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
};

// DECODE token without verification (optional)
const decodeToken = (token) => {
    return jwt.decode(token);
};

export {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
    decodeToken
};