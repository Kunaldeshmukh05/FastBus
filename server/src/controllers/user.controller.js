import { User } from "../models/user.models.js";
import { hashPassword } from "../utils/bcrypt.utils.js";

const registerUser = async (req, res) => {
    try {
        const {
            username,
            fullName,
            email,
            contact,
            age,
            gender,
            userRole,
            password
        } = req.body;

        if (
            !username ||
            !fullName ||
            !email ||
            !contact ||
            !age ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }

        const existingUser = await User.findOne({
            $or: [
                { username },
                { email },
                { contact }
            ]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            username,
            fullName,
            email,
            contact,
            age,
            gender,
            userRole,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export { registerUser };