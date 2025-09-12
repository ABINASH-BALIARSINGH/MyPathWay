const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const quizApi = {
  // Get all quizzes with filters
  getQuizzes: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.search) params.append('search', filters.search);
    if (filters.category_id) params.append('category_id', filters.category_id);
    if (filters.difficulty_level) params.append('difficulty_level', filters.difficulty_level);
    
    const response = await fetch(`${API_BASE}/quiz?${params}`, {
      credentials: 'include'
    });
    return response.json();
  },

  // Get quiz categories
  getCategories: async () => {
    const response = await fetch(`${API_BASE}/quiz/categories`);
    return response.json();
  },

  // Get quiz by ID
  getQuizById: async (quizId) => {
    const response = await fetch(`${API_BASE}/quiz/${quizId}`, {
      credentials: 'include'
    });
    return response.json();
  },

  // Start quiz attempt
  startQuiz: async (quizId) => {
    const response = await fetch(`${API_BASE}/quiz/${quizId}/start`, {
      method: 'POST',
      credentials: 'include'
    });
    return response.json();
  },

  // Submit quiz attempt
  submitQuiz: async (attemptId, answers) => {
    const response = await fetch(`${API_BASE}/quiz/attempts/${attemptId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ answers })
    });
    return response.json();
  },

  // Get user quiz history
  getUserHistory: async () => {
    const response = await fetch(`${API_BASE}/quiz/history`, {
      credentials: 'include'
    });
    return response.json();
  },

  // Get dashboard stats
  getDashboardStats: async () => {
    const response = await fetch(`${API_BASE}/quiz/dashboard`, {
      credentials: 'include'
    });
    return response.json();
  }
};