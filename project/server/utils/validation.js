const Joi = require('joi');

// Registration validation schema
const registrationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Name can only contain letters and spaces',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name must not exceed 50 characters'
    }),
  
  email: Joi.string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address'
    }),
  
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password must not exceed 128 characters'
    }),
  
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match'
    }),
  
  role: Joi.string()
    .valid('learner', 'instructor')
    .default('learner')
});

// Login validation schema
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address'
    }),
  
  password: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.empty': 'Password is required'
    })
});

// Profile update validation schema
const profileUpdateSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-Z\s]+$/)
    .optional()
    .messages({
      'string.pattern.base': 'Name can only contain letters and spaces',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name must not exceed 50 characters'
    }),
  
  avatar: Joi.string()
    .uri()
    .optional()
    .allow('')
    .messages({
      'string.uri': 'Avatar must be a valid URL'
    }),
  
  skills: Joi.array()
    .items(Joi.string().trim().min(1).max(50))
    .max(20)
    .optional()
    .messages({
      'array.max': 'You can have a maximum of 20 skills'
    })
});

// Progress update validation schema
const progressUpdateSchema = Joi.object({
  courses_completed: Joi.number().integer().min(0).max(9999).optional(),
  total_courses: Joi.number().integer().min(0).max(9999).optional(),
  certificates_earned: Joi.number().integer().min(0).max(9999).optional(),
  tests_taken: Joi.number().integer().min(0).max(99999).optional(),
  average_score: Joi.number().min(0).max(100).precision(2).optional()
});

// Chat message validation schema
const chatMessageSchema = Joi.object({
  message: Joi.string()
    .trim()
    .min(1)
    .max(1000)
    .required()
    .messages({
      'string.empty': 'Message cannot be empty',
      'string.max': 'Message must not exceed 1000 characters'
    })
});

// Password change validation schema
const passwordChangeSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password must not exceed 128 characters'
    }),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref('newPassword'))
    .required()
    .messages({
      'any.only': 'Passwords do not match'
    })
});

// Validation functions
const validateRegistration = (data) => {
  return registrationSchema.validate(data, { abortEarly: false });
};

const validateLogin = (data) => {
  return loginSchema.validate(data, { abortEarly: false });
};

const validateProfileUpdate = (data) => {
  return profileUpdateSchema.validate(data, { abortEarly: false });
};

const validateProgressUpdate = (data) => {
  return progressUpdateSchema.validate(data, { abortEarly: false });
};

const validateChatMessage = (data) => {
  return chatMessageSchema.validate(data, { abortEarly: false });
};

const validatePasswordChange = (data) => {
  return passwordChangeSchema.validate(data, { abortEarly: false });
};

module.exports = {
  validateRegistration,
  validateLogin,
  validateProfileUpdate,
  validateProgressUpdate,
  validateChatMessage,
  validatePasswordChange
};