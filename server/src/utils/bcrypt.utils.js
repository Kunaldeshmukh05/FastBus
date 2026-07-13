import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const hashPassword = async (password) => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export {
    hashPassword,
    comparePassword
};