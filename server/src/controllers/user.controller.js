import { User } from "../models/user.models.js";
import { hashPassword } from "../utils/bcrypt.utils.js";
import { generateAccessToken, generateRefreshToken } from "../auth/jwt.auth.js";

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

        // Validation
        if (!username || !fullName || !email || !contact || !age || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }

        // Check existing user
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
                message: "User already exists with this username, email, or contact"
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create user
        const user = await User.create({
            username,
            fullName,
            email,
            contact,
            age,
            gender,
            userRole: userRole || 'customer', // Default role
            password: hashedPassword
        });

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: userResponse
        });

    } catch (error) {
        // Handle duplicate key error
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(409).json({
                success: false,
                message: `${field} already exists`
            });
        }
        
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export { registerUser };