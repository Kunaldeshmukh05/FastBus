import { User } from "../models/user.models.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.utils.js";
import { generateAccessToken, generateRefreshToken } from "../auth/jwt.auth.js";


//register user
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


//login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password"
            });
        }

        // ✅ FIX: Select password explicitly (it might be excluded by default)
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // ✅ DEBUG: Check if user and password exist
        console.log('User found:', user.email);
        console.log('Has password?', !!user.password);

        // ✅ Verify password
        const isPasswordValid = await comparePassword(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Generate tokens
        const accessToken = generateAccessToken({
            userId: user._id,
            username: user.username,
            email: user.email,
            role: user.userRole
        });

        const refreshToken = generateRefreshToken({
            userId: user._id
        });

        // Set refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(200).json({
            success: true,
            message: "Login successful",
            accessToken,
            user: userResponse
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export { registerUser, loginUser };