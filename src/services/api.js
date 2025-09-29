const API_BASE_URL = 'https://apiblogpost.onrender.com/v1';

// Função para fazer requisições autenticadas (apenas para operações que precisam de autenticação)
const authenticatedRequest = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config);
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Função para fazer requisições públicas (GET sem autenticação)
const publicRequest = async (url, options = {}) => {
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config);
    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Função para obter token da API
const getApiToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth`);
    if (!response.ok) throw new Error('Failed to get API token');
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error getting API token:', error);
    throw error;
  }
};

// Funções da API
export const api = {
  // Obter token da API
  getToken: getApiToken,

  // Posts (requerem token da API)
  getPosts: async () => {
    const token = await getApiToken();
    const response = await publicRequest('/posts', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  },

  getPost: async (id) => {
    const token = await getApiToken();
    const response = await publicRequest(`/posts/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch post');
    return response.json();
  },

  searchPosts: async (searchParams) => {
    const token = await getApiToken();
    const queryString = new URLSearchParams(searchParams).toString();
    const response = await publicRequest(`/posts/search?${queryString}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to search posts');
    return response.json();
  },

  createPost: async (postData) => {
    const token = await getApiToken();
    const response = await publicRequest('/posts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return response.json();
  },

  updatePost: async (id, postData) => {
    const token = await getApiToken();
    const response = await publicRequest(`/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Failed to update post');
    return response.json();
  },

  deletePost: async (id) => {
    const token = await getApiToken();
    const response = await publicRequest(`/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) throw new Error('Failed to delete post');
    return response.json();
  },
};
