import { SignJWT, jwtVerify } from 'jose';

// Chave secreta para JWT (em produção, usar variável de ambiente)
const JWT_SECRET = new TextEncoder().encode('edublog_secret_key_2024');

// Usuários manuais do sistema
const USERS = [
  {
    id: 1,
    email: 'g63888951@gmail.com',
    password: 'GrupoEstudos123@!',
    name: 'Grupo de Estudos',
    role: 'admin'
  }
];

// Função para verificar credenciais
export const authenticateUser = async (email, password) => {
  const user = USERS.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Criar token JWT
    const token = await new SignJWT({ 
      userId: user.id, 
      email: user.email, 
      name: user.name,
      role: user.role 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(JWT_SECRET);
    
    return {
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    };
  }
  
  return {
    success: false,
    message: 'Email ou senha incorretos'
  };
};

// Função para verificar token JWT
export const verifyToken = async (token) => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      valid: true,
      user: payload
    };
  } catch (error) {
    return {
      valid: false,
      message: 'Token inválido ou expirado'
    };
  }
};

// Função para decodificar token sem verificar (para obter dados do usuário)
export const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};
