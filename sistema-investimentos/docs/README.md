# 📚 Documentação - Sistema de Investimentos

## 📋 Índice da Documentação

Bem-vindo à documentação completa do **Sistema de Investimentos** - uma aplicação monolítica educacional que integra frontend e backend para demonstrar conceitos de desenvolvimento full-stack.

---

## 🗂️ Estrutura da Documentação

### 📖 Documentos Principais

1. **[C4 Model - Arquitetura Completa](./c4-arquitetura-completa.md)** ⭐
   - Modelo C4 completo (Context, Containers, Components)
   - Diagramas detalhados de arquitetura
   - Database schema e API overview
   - Deployment e security architecture
   - Performance, testing e roadmap futuro

2. **[Arquitetura do Sistema](./arquitetura-sistema.md)**
   - Visão geral da arquitetura monolítica
   - Componentes e tecnologias utilizadas
   - Fluxos de dados e segurança
   - Estrutura de diretórios

3. **[Interface do Usuário](./frontend-interface.md)**
   - Stack tecnológico do frontend
   - Componentes e páginas
   - Design system e responsividade
   - JavaScript e interatividade

4. **[Diagramas de Sequência](./diagramas-sequencia.md)**
   - Fluxos de autenticação e navegação
   - Operações de investimento
   - Interação frontend-backend
   - Casos de uso completos

---

## 🚀 Visão Geral do Sistema

### 🎯 Objetivo
Sistema educacional completo para demonstrar desenvolvimento de uma plataforma de investimentos com:
- **Frontend moderno** e responsivo
- **Backend robusto** com API RESTful
- **Banco de dados** PostgreSQL
- **Autenticação** JWT integrada
- **Interface visual** intuitiva

### 🏛️ Arquitetura
```
┌─────────────────────────────────────────────────┐
│                MONÓLITO COMPLETO                │
├─────────────────┬───────────────────────────────┤
│    FRONTEND     │           BACKEND             │
│                 │                               │
│  • EJS Templates│  • Express.js                 │
│  • Bootstrap 5  │  • API RESTful                │
│  • JavaScript   │  • Autenticação JWT           │
│  • Chart.js     │  • Sequelize ORM              │
│  • CSS Moderno  │  • Middleware                 │
└─────────────────┴───────────────────────────────┘
                         │
                ┌────────────────┐
                │   PostgreSQL   │
                │   + Adminer    │
                └────────────────┘
```

---

## 📄 Páginas e Funcionalidades

### 🌐 Interface Web

| Página | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| **Home** | `/` | Página inicial com overview | Opcional |
| **Login** | `/login` | Autenticação de usuários | Não |
| **Registro** | `/register` | Cadastro de novos usuários | Não |
| **Dashboard** | `/dashboard` | Painel principal com métricas | Obrigatória |
| **Ativos** | `/assets` | Catálogo para investimentos | Opcional |
| **Portfólio** | `/portfolio` | Análise do portfólio pessoal | Obrigatória |
| **Transações** | `/transactions` | Histórico e nova transação | Obrigatória |
| **Perfil** | `/profile` | Configurações do usuário | Obrigatória |

### 🔌 API REST

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/v1/auth/*` | POST | Autenticação e registro |
| `/api/v1/users/*` | GET/PUT | Gestão de usuários |
| `/api/v1/assets/*` | GET | Catálogo de ativos |
| `/api/v1/portfolio/*` | GET | Dados do portfólio |
| `/api/v1/transactions/*` | GET/POST | Operações financeiras |
| `/health` | GET | Health check do sistema |
| `/api-docs/` | GET | Documentação Swagger |

---

## 🛠️ Stack Tecnológico Completo

### Frontend
- **Template Engine**: EJS 3.x
- **CSS Framework**: Bootstrap 5.3
- **JavaScript**: Vanilla ES6+ (Classes, Modules, Fetch)
- **Charts**: Chart.js 4.x
- **Icons**: Font Awesome 6.x
- **Responsivo**: Mobile-first design

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.x
- **ORM**: Sequelize 6.x
- **Autenticação**: JWT + bcrypt
- **Validação**: express-validator
- **Documentação**: Swagger/OpenAPI

### Banco de Dados
- **Principal**: PostgreSQL 15+
- **Admin**: Adminer
- **Migrations**: Sequelize CLI
- **Seeds**: Dados iniciais

### DevOps
- **Container**: Docker + Docker Compose
- **Logs**: Morgan + Winston
- **Environment**: dotenv
- **Process**: PM2 (produção)

---

## 🎨 Características do Frontend

### Design Moderno
- ✅ Interface responsiva e intuitiva
- ✅ Dashboard com gráficos interativos
- ✅ Formulários com validação em tempo real
- ✅ Notificações toast elegantes
- ✅ Loading states e skeleton screens
- ✅ Modals para ações rápidas

### Experiência do Usuário
- 🔐 **Autenticação visual** com feedback
- 📊 **Gráficos Chart.js** para análises
- 🔄 **Auto-refresh** de dados
- 📱 **Mobile-friendly** design
- ⚡ **Performance otimizada**
- 🎯 **Navegação intuitiva**

---

## 🔧 Funcionalidades Implementadas

### ✅ Sistema Completo
- [x] **Homepage** atrativa com overview
- [x] **Sistema de Login/Registro** funcional
- [x] **Dashboard** com métricas e gráficos
- [x] **Catálogo de Ativos** com filtros
- [x] **Análise de Portfólio** detalhada
- [x] **Histórico de Transações** com paginação
- [x] **Perfil do Usuário** com configurações
- [x] **API REST** completa e documentada
- [x] **Autenticação JWT** integrada
- [x] **Responsividade** total
- [x] **Docker** para desenvolvimento

### 🎯 Dados Demo
- 👤 **Usuário de teste**: `admin@fiap.com.br` / `senha123`
- 💰 **Ativos simulados**: PETR4, VALE3, ITUB4, FIIs, etc.
- 📈 **Dados mock**: Portfolio, transações, performance
- 🔄 **Auto-atualização**: Simulação de dados em tempo real

---

## 🚀 Quick Start

### 1. Clone e Setup
```bash
git clone <repository>
cd sistema-investimentos
```

### 2. Docker Compose
```bash
docker-compose up -d
```

### 3. Acesso
- **Frontend**: http://localhost:3001
- **API Docs**: http://localhost:3001/api-docs
- **Database Admin**: http://localhost:8080

### 4. Login Demo
- **Email**: admin@fiap.com.br
- **Senha**: senha123

---

## 📊 Métricas do Projeto

### Código
- **Frontend**: ~1.200 linhas (EJS + CSS + JS)
- **Backend**: ~800 linhas (JavaScript)
- **Documentação**: ~2.000 linhas (Markdown)
- **Total**: ~4.000 linhas

### Arquivos
- **8 páginas** EJS completas
- **1 layout** responsivo base
- **6 rotas** de páginas
- **19 endpoints** de API
- **5 modelos** de dados

### Funcionalidades
- **100%** responsivo
- **8 páginas** funcionais
- **Autenticação** completa
- **Gráficos** interativos
- **Mock data** realista

---

## 🎓 Valor Educacional

### Conceitos Demonstrados

1. **Arquitetura Monolítica**
   - Frontend e backend integrados
   - Shared components e validações
   - Deploy unificado

2. **Full-Stack Development**
   - JavaScript end-to-end
   - Templates server-side
   - API RESTful design

3. **Modern Frontend**
   - ES6+ JavaScript
   - Responsive design
   - Component architecture

4. **Backend Robusto**
   - Express.js patterns
   - ORM relationships
   - JWT authentication

5. **DevOps Basics**
   - Docker containerization
   - Environment configuration
   - Database management

---

## 📞 Suporte e Contribuição

### Estrutura para Extensão
O sistema foi projetado para ser facilmente extensível:

- ➕ **Novas páginas**: Seguir padrão EJS
- 🔌 **Novos endpoints**: Expandir rotas API
- 🎨 **UI components**: Reutilizar design system
- 📊 **Dados**: Expandir modelos Sequelize
- 🔧 **Features**: Adicionar funcionalidades

### Próximos Passos Sugeridos
1. **PWA**: Service Worker + Manifest
2. **Real-time**: WebSockets para cotações
3. **Testes**: Unit + Integration tests
4. **CI/CD**: Pipeline automatizado
5. **Microservices**: Migração gradual

---

## 📝 Conclusão

O Sistema de Investimentos demonstra com sucesso como desenvolver uma aplicação monolítica moderna e completa, integrando frontend visual atrativo com backend robusto, proporcionando uma experiência educacional rica em conceitos de desenvolvimento full-stack.

A documentação completa está organizada nos arquivos listados acima, fornecendo detalhes técnicos, diagramas e guias para compreensão e extensão do sistema. 