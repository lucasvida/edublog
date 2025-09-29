# EduBlog - Frontend

Um blog educacional desenvolvido em React com integração completa à API REST.

## 🚀 Funcionalidades

### ✅ Implementadas

- **Autenticação JWT**: Sistema de login com token automático
- **Página Principal**: Lista todos os posts
- **Lista de Posts**: Exibe todos os posts com funcionalidade de busca
- **Detalhes do Post**: Visualização completa de cada post
- **Área Administrativa**: CRUD completo para gerenciar posts
- **Responsividade**: Interface adaptável para mobile e desktop
- **Busca**: Pesquisa por título

### 🎯 Páginas

- `/` - Redireciona para /posts
- `/posts` - Lista completa de posts com busca
- `/post/:id` - Visualização individual do post
- `/login` - Autenticação para área administrativa
- `/admin` - Painel administrativo
- `/admin/new-post` - Criar novo post
- `/admin/edit-post/:id` - Editar post existente

## 🛠️ Tecnologias

- **React 19** - Framework principal
- **React Router DOM** - Navegação
- **Tailwind CSS** - Estilização
- **Context API** - Gerenciamento de estado
- **Fetch API** - Comunicação com backend

## 🔗 API

O frontend consome a API disponível em: `https://apiblogpost.onrender.com`

### Endpoints utilizados:
- `GET /v1/auth` - Obter token JWT
- `GET /v1/posts` - Listar todos os posts
- `GET /v1/posts/:id` - Buscar post por ID
- `GET /v1/posts/search` - Buscar posts por critérios
- `POST /v1/posts` - Criar novo post
- `PUT /v1/posts/:id` - Atualizar post
- `DELETE /v1/posts/:id` - Excluir post

## 🚀 Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse `http://localhost:5173`

## 🔐 Autenticação

Para acessar a área administrativa:
- Acesse `/login`
- **Email:** `g63888951@gmail.com`
- **Senha:** `GrupoEstudos123@!`
- O token JWT é obtido automaticamente

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🎨 Interface

- Design moderno e limpo
- Cores: Azul (#2563eb) como cor principal
- Componentes reutilizáveis
- Estados de loading e erro
- Feedback visual para ações do usuário

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card/           # PostCard
│   ├── Footer/         # Rodapé
│   ├── Menu/           # Menu de navegação
│   └── Skeleton/       # Loading states
├── contexts/           # Context API
│   └── AuthContext.jsx # Gerenciamento de autenticação
├── pages/              # Páginas da aplicação
│   ├── Posts.jsx       # Lista de posts
│   ├── PostDetail.jsx  # Detalhes do post
│   ├── Login.jsx       # Autenticação
│   ├── Admin.jsx       # Painel administrativo
│   └── PostForm.jsx    # Formulário de posts
├── services/           # Serviços
│   ├── api.js          # Integração com API
│   └── auth.js         # Autenticação JWT
└── App.jsx             # Componente principal
```

## ✅ Requisitos Atendidos

- ✅ React + Tailwind CSS
- ✅ Hooks e componentes funcionais
- ✅ Responsividade (mobile e desktop)
- ✅ Integração com API (REST)
- ✅ Gerenciamento de estado (Context API)
- ✅ JWT para autenticação
- ✅ Página principal (lista de posts)
- ✅ Página de leitura de post
- ✅ Criação de post
- ✅ Edição de post
- ✅ Página administrativa
- ✅ Autenticação para professores
- ✅ CRUD completo de posts
- ✅ Campo de busca por palavra-chave

## 🧹 Limpeza

Foram removidos arquivos desnecessários do React:
- Componentes Featured não utilizados
- Componentes Sidebar não utilizados
- Pastas vazias

O projeto está otimizado e pronto para produção!