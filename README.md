# Template SaaS

Um template de aplicação SaaS (Software as a Service) construído com Next.js 15, React 19, Firebase, NextAuth e Stripe para processamento de pagamentos.

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Next.js 15](https://nextjs.org/) - Framework React com renderização híbrida
- [React 19](https://react.dev/) - Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [NextAuth](https://next-auth.js.org/) - Autenticação para Next.js
- [Firebase](https://firebase.google.com/) - Plataforma de desenvolvimento de aplicativos
- [Stripe](https://stripe.com/) - Plataforma de processamento de pagamentos

## 📋 Pré-requisitos

- Node.js (versão recomendada: 20.x ou superior)
- npm ou yarn
- Conta no Firebase
- Conta no Stripe

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd template-saas
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
     ```
     # Firebase
     FIREBASE_API_KEY=
     FIREBASE_AUTH_DOMAIN=
     FIREBASE_PROJECT_ID=
     FIREBASE_STORAGE_BUCKET=
     FIREBASE_MESSAGING_SENDER_ID=
     FIREBASE_APP_ID=
     
     # NextAuth
     AUTH_SECRET=
     
     # Stripe
     STRIPE_API_KEY=
     STRIPE_WEBHOOK_SECRET=
     ```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 🏗️ Estrutura do Projeto

```
/app
  /(project) - Páginas principais da aplicação
    /dashboard - Área logada do usuário
    /login - Autenticação de usuários
  /api - Rotas de API
  /components - Componentes React reutilizáveis
  /hooks - Custom hooks React
  /lib - Funções utilitárias
  /actions - Server actions do Next.js
  /server - Configurações do lado do servidor
```

## 📦 Funcionalidades

- Autenticação de usuários com NextAuth e Firebase
- Dashboard para usuários logados
- Integração com Stripe para pagamentos de assinaturas
- Layout responsivo com Tailwind CSS

## 🚢 Deployment

Para fazer o build da aplicação para produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar a aplicação em produção:

```bash
npm run start
# ou
yarn start
```

## 📄 Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/).

---

Desenvolvido como projeto de estudo da Rocketseat.
