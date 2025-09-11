const User = require('../models/User');
const { validateRegistration, validateLogin } = require('../utils/validation');

class AuthController {
  // -------------------- REGISTER --------------------
  static async register(req, res) {
    try {
      console.log('--- Register endpoint hit ---');
      console.log('Request body:', req.body);

      // Validate input
      const { error, value } = validateRegistration(req.body);
      if (error) {
        console.log('Validation failed:', error.details.map(d => d.message));
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.details.map(detail => detail.message),
        });
      }

      const { name, email, password, role } = value;
      console.log('Validation passed:', { name, email, role });

      // Check if user already exists
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        console.log('User already exists with email:', email);
        return res.status(409).json({
          success: false,
          message: 'User already exists with this email',
        });
      }

      // Create new user
      const user = await User.create({ name, email, password, role });
      console.log('User created:', user.getPublicInfo());

      // Generate JWT token
      const token = user.generateToken();
      if (!token) {
        console.error('Token generation failed');
        return res.status(500).json({ success: false, message: 'Token generation failed' });
      }
      console.log('Token generated');

      // Store session
      try {
        await user.storeSession(token);
        console.log('Session stored successfully');
      } catch (sessErr) {
        console.error('Session storage failed:', sessErr);
        return res.status(500).json({ success: false, message: 'Failed to store user session' });
      }

      // Update last login
      await user.updateLastLogin();
      console.log('Last login updated');

      // Set HTTP-only cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // false for localhost
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax', // lax for localhost
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      console.log('Cookie set successfully');

      // Respond
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: user.getPublicInfo(),
        token,
      });
      console.log('Registration completed ✅');

    } catch (error) {
      console.error('Registration error caught:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error during registration',
        ...(process.env.NODE_ENV !== 'production' && { stack: error.stack }),
      });
    }
  }

  // -------------------- LOGIN --------------------
  static async login(req, res) {
    try {
      console.log('--- Login endpoint hit ---');
      console.log('Request body:', req.body);

      // Validate input
      const { error, value } = validateLogin(req.body);
      if (error) {
        console.log('Login validation failed:', error.details.map(d => d.message));
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.details.map(d => d.message),
        });
      }

      const { email, password } = value;

      // Find user
      const user = await User.findByEmail(email);
      if (!user) {
        console.log('No user found with email:', email);
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // Verify password
      const isPasswordValid = await user.verifyPassword(password);
      if (!isPasswordValid) {
        console.log('Invalid password for email:', email);
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // Generate token
      const token = user.generateToken();
      await user.storeSession(token);
      await user.updateLastLogin();

      // Set cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        success: true,
        message: 'Login successful',
        user: user.getPublicInfo(),
        token,
      });
      console.log('Login successful ✅');

    } catch (error) {
      console.error('Login error caught:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error during login',
        ...(process.env.NODE_ENV !== 'production' && { stack: error.stack }),
      });
    }
  }

  // -------------------- LOGOUT --------------------
  static async logout(req, res) {
    try {
      const token = req.cookies.token || req.headers.authorization?.replace('Bearer ', '');
      if (token) await User.logout(token);

      res.clearCookie('token');
      res.status(200).json({ success: true, message: 'Logout successful' });
      console.log('Logout successful ✅');

    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ success: false, message: 'Internal server error during logout' });
    }
  }

  // -------------------- PROFILE --------------------
  static async getProfile(req, res) {
    try {
      res.status(200).json({ success: true, user: req.user.getPublicInfo() });
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }

  static async updateProfile(req, res) {
    try {
      const allowedUpdates = ['name', 'avatar', 'skills'];
      const updates = {};
      Object.keys(req.body).forEach(key => {
        if (allowedUpdates.includes(key) && req.body[key] !== undefined) updates[key] = req.body[key];
      });

      if (!Object.keys(updates).length)
        return res.status(400).json({ success: false, message: 'No valid fields to update' });

      const updatedUser = await req.user.updateProfile(updates);
      res.status(200).json({ success: true, message: 'Profile updated successfully', user: updatedUser.getPublicInfo() });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ success: false, message: 'Internal server error during profile update' });
    }
  }

  static async updateProgress(req, res) {
    try {
      const progressData = req.body;
      const updatedUser = await req.user.updateProgress(progressData);
      res.status(200).json({ success: true, message: 'Progress updated successfully', user: updatedUser.getPublicInfo() });
    } catch (error) {
      console.error('Update progress error:', error);
      res.status(500).json({ success: false, message: 'Internal server error during progress update' });
    }
  }

  // -------------------- VERIFY TOKEN --------------------
  static async verifyToken(req, res) {
    try {
      res.status(200).json({ success: true, valid: true, user: req.user.getPublicInfo() });
    } catch (error) {
      console.error('Verify token error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
}

module.exports = AuthController;
