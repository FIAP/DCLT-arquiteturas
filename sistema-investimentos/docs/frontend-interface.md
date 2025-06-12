# 🎨 Frontend - Interface do Usuário

## 📋 Visão Geral

O frontend do **Sistema de Investimentos** é uma interface web moderna e responsiva integrada ao backend Node.js, desenvolvida para proporcionar uma experiência de usuário intuitiva e profissional na gestão de investimentos.

## 🛠️ Stack Tecnológico

### Core Technologies
- **Template Engine**: EJS (Embedded JavaScript)
- **CSS Framework**: Bootstrap 5.3
- **JavaScript**: Vanilla ES6+ com classes e módulos
- **Charts**: Chart.js para visualizações
- **Icons**: Font Awesome 6
- **HTTP Client**: Fetch API nativa

### Arquitetura Frontend
```
src/
├── views/                    # Templates EJS
│   ├── layout/              # Layouts base
│   │   └── base.ejs         # Layout principal
│   ├── pages/               # Páginas da aplicação
│   │   ├── home.ejs         # Página inicial
│   │   ├── login.ejs        # Autenticação
│   │   ├── register.ejs     # Cadastro
│   │   ├── dashboard.ejs    # Dashboard principal
│   │   ├── assets.ejs       # Catálogo de ativos
│   │   ├── portfolio.ejs    # Análise do portfólio
│   │   ├── transactions.ejs # Histórico de transações
│   │   └── profile.ejs      # Configurações do usuário
│   └── error.ejs           # Página de erro 404
└── public/                  # Assets estáticos
    ├── css/
    │   └── app.css         # CSS personalizado (263 linhas)
    ├── js/
    │   └── app.js          # JavaScript principal (302 linhas)
    └── images/             # Imagens e ícones
```

---

## 🎯 Componentes Principais

### 1. Layout Base (`base.ejs`)

**Características:**
- Layout responsivo com Bootstrap 5
- Navbar dinâmica (público/autenticado)
- Footer com informações do sistema
- Meta tags para SEO
- CDN para bibliotecas externas

**Funcionalidades:**
```html
- Navbar adaptável ao estado de autenticação
- Links de navegação contextual
- Dropdown de usuário logado
- Breadcrumbs para orientação
- Footer informativo
```

### 2. Sistema de Autenticação Visual

**Login (`login.ejs`):**
- Formulário moderno com validação
- Credenciais demo pré-preenchidas
- Feedback visual de erros
- Redirecionamento automático

**Registro (`register.ejs`):**
- Formulário multi-step
- Validação de CPF em tempo real
- Seleção de perfil de risco
- Política de senhas seguras

### 3. Dashboard Interativo (`dashboard.ejs`)

**Widgets de Resumo:**
```javascript
- Valor total do portfólio
- Retorno percentual
- Número de ativos
- Última transação
```

**Gráficos e Visualizações:**
- Gráfico de performance (Chart.js)
- Distribuição por tipo de ativo
- Top performers
- Transações recentes

**Funcionalidades JavaScript:**
```javascript
class DashboardManager {
    loadPortfolioData()     // Carrega dados via API
    updateWidgets()         // Atualiza métricas
    renderCharts()          // Cria gráficos Chart.js
    handleRealTimeData()    // Simula dados em tempo real
}
```

### 4. Catálogo de Ativos (`assets.ejs`)

**Interface de Busca:**
- Filtros por tipo (ações, FIIs, etc.)
- Busca em tempo real
- Ordenação por múltiplos critérios
- Paginação inteligente

**Modal de Investimento:**
- Seleção de ativo
- Cálculo automático de valores
- Validação de formulário
- Confirmação visual

**Dados Simulados:**
```javascript
const mockAssets = [
    { symbol: 'PETR4', name: 'Petrobras', price: 32.50, change: 2.1% },
    { symbol: 'VALE3', name: 'Vale', price: 68.20, change: -1.5% },
    // ... mais ativos
];
```

### 5. Análise de Portfólio (`portfolio.ejs`)

**Métricas Avançadas:**
- Performance temporal
- Diversificação por setores
- Análise de risco/retorno
- Recomendações automáticas

**Gráficos Interativos:**
```javascript
// Gráfico de Performance
new Chart(ctx, {
    type: 'line',
    data: portfolioPerformance,
    options: {
        responsive: true,
        scales: { /* configurações */ }
    }
});

// Gráfico de Alocação
new Chart(ctx, {
    type: 'doughnut',
    data: assetAllocation,
    options: { /* configurações */ }
});
```

**Tabela de Posições:**
- Dados detalhados por ativo
- Cálculos de P&L em tempo real
- Ações rápidas (comprar/vender)
- Export para CSV

### 6. Histórico de Transações (`transactions.ejs`)

**Filtros Avançados:**
- Por período (data início/fim)
- Por tipo (compra/venda)
- Por ativo específico
- Status da transação

**Nova Transação:**
```javascript
class TransactionManager {
    openNewTransactionModal()
    validateTransactionForm()
    calculateTotalValues()
    submitTransaction()
    updateTransactionList()
}
```

**Paginação Inteligente:**
- 10 itens por página
- Navegação numérica
- Links anterior/próximo
- Contador total

### 7. Perfil do Usuário (`profile.ejs`)

**Abas de Configuração:**
1. **Dados Pessoais**: Nome, email, telefone, perfil de risco
2. **Segurança**: Alterar senha, 2FA, sessões ativas
3. **Preferências**: Tema, idioma, moeda, dashboard
4. **Notificações**: Email, push, alertas

**Validações em Tempo Real:**
```javascript
// Máscara de telefone
phone.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
});

// Validação de senhas
function validatePasswordMatch() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    return newPassword === confirmPassword;
}
```

---

## 🎨 Design System

### Paleta de Cores
```css
:root {
    --primary-color: #3498db;     /* Azul principal */
    --secondary-color: #2c3e50;   /* Azul escuro */
    --success-color: #27ae60;     /* Verde sucesso */
    --warning-color: #f39c12;     /* Laranja aviso */
    --danger-color: #e74c3c;      /* Vermelho erro */
    --info-color: #17a2b8;        /* Azul informação */
    --light-bg: #f8f9fa;          /* Fundo claro */
    --dark-text: #2c3e50;         /* Texto escuro */
}
```

### Tipografia
```css
.hero-title { font-size: 3.5rem; font-weight: 700; }
.section-title { font-size: 2rem; font-weight: 600; }
.widget-value { font-size: 1.75rem; font-weight: 700; }
.widget-label { font-size: 0.875rem; text-transform: uppercase; }
```

### Componentes Reutilizáveis

**Widgets:**
```css
.widget {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.widget:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
```

**Botões:**
```css
.btn-modern {
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
}
```

**Cards:**
```css
.card-modern {
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}
```

---

## ⚡ JavaScript - Arquitetura Frontend

### Classe Principal (`InvestmentApp`)

```javascript
class InvestmentApp {
    constructor() {
        this.user = null;
        this.token = localStorage.getItem('token');
        this.apiBaseUrl = '/api/v1';
        this.init();
    }

    async init() {
        await this.checkAuthentication();
        this.setupEventListeners();
        this.updateNavigation();
    }

    // Autenticação
    async login(credentials) { /* ... */ }
    async logout() { /* ... */ }
    async checkAuthentication() { /* ... */ }

    // API Calls
    async apiCall(endpoint, options = {}) { /* ... */ }
    
    // UI Management
    updateNavigation() { /* ... */ }
    showNotification(message, type) { /* ... */ }
}
```

### Sistema de Notificações

```javascript
class NotificationManager {
    show(message, type = 'info', duration = 5000) {
        const notification = this.createNotification(message, type);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            this.hide(notification);
        }, duration);
    }

    createNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        return notification;
    }
}
```

### Utilitários

```javascript
class Utils {
    static formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    static formatPercentage(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2
        }).format(value / 100);
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}
```

---

## 📱 Responsividade

### Breakpoints Bootstrap
```css
/* Extra small devices (phones, 576px and down) */
@media (max-width: 575.98px) { /* ... */ }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { /* ... */ }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { /* ... */ }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { /* ... */ }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { /* ... */ }
```

### Adaptações Mobile

**Navegação:**
- Hamburger menu em dispositivos pequenos
- Links de ação prioritários
- Gesture-friendly touch targets

**Tabelas:**
- Scroll horizontal automático
- Cards em telas pequenas
- Priorização de colunas importantes

**Formulários:**
- Inputs otimizados para touch
- Teclados específicos (numérico, email)
- Validação inline

---

## 🔍 SEO e Performance

### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Sistema de Investimentos - Plataforma educacional">
<meta name="keywords" content="investimentos, ações, portfólio, finanças">
<meta name="author" content="Sistema de Investimentos">
```

### Performance
- **CSS/JS Minificado**: Arquivos otimizados para produção
- **Lazy Loading**: Carregamento sob demanda de componentes
- **Cache**: Aproveitamento do cache do navegador
- **CDN**: Bibliotecas carregadas de CDNs

### Acessibilidade
- **ARIA Labels**: Elementos semânticos
- **Contraste**: Cores com contraste adequado
- **Navegação por Teclado**: Todos os elementos acessíveis
- **Screen Readers**: Compatibilidade total

---

## 🧪 Funcionalidades Avançadas

### Dados Simulados (Mock Data)
```javascript
// Simula API para demonstração
const mockData = {
    portfolio: { /* dados do portfólio */ },
    assets: [ /* lista de ativos */ ],
    transactions: [ /* histórico de transações */ ]
};
```

### Auto-refresh
```javascript
// Atualização automática de dados a cada 30 segundos
setInterval(() => {
    if (this.user) {
        this.refreshDashboardData();
    }
}, 30000);
```

### Estados de Loading
```css
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

---

## 🚀 Deploy e Produção

### Otimizações para Produção

1. **Minificação**: CSS e JS compactados
2. **Compression**: Gzip habilitado no servidor
3. **Cache Headers**: Cache adequado para assets
4. **Image Optimization**: Imagens otimizadas

### PWA Features (Futuro)
- Service Worker para cache offline
- Web App Manifest
- Push Notifications
- Install Prompt

---

## 📚 Guia de Desenvolvimento

### Adicionando Nova Página

1. **Criar template EJS** em `src/views/pages/`
2. **Adicionar rota** em `src/routes/pageRoutes.js`
3. **Implementar JavaScript** específico da página
4. **Adicionar CSS** customizado se necessário
5. **Atualizar navegação** no layout base

### Estrutura de Página Padrão
```html
<%- include('../layout/base', { 
    title: 'Título da Página',
    body: `
        <!-- Conteúdo HTML da página -->
        <script>
            // JavaScript específico da página
        </script>
    ` 
}) %>
```

### Boas Práticas

1. **Componentização**: Reutilizar elementos comuns
2. **Validação**: Client-side + server-side sempre
3. **Acessibilidade**: ARIA, semântica, contraste
4. **Performance**: Lazy loading, debounce, throttle
5. **Segurança**: Sanitização, CSP, validação

O frontend do Sistema de Investimentos demonstra como criar uma interface moderna e funcional integrada a um backend Node.js, proporcionando uma experiência completa de usuário em uma aplicação monolítica. 