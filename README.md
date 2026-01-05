# 🤖 AI Chatbot (Full Stack)

A modern **full-stack AI chatbot** built with **React + Vite** on the frontend and **Node.js + Express** on the backend.
The chatbot is powered by **OpenAI**, maintains conversation context using a `conversationId`, and follows strong **DX and code quality standards** with **TypeScript, Husky, ESLint, and Prettier**.

---

## 🚀 Features

- **AI-Powered Chat** – Responses generated using OpenAI
- **Conversation Context** – Persistent chats via `conversationId`
- **Modern Frontend** – React, Vite, Tailwind, shadcn/ui
- **Type-Safe Backend** – Express + TypeScript + Zod validation
- **Monorepo Structure** – Client & server managed in one repo
- **Great DX** – Bun, Husky, ESLint, Prettier
- **Responsive UI** – Clean chat interface with typing indicator

---

## 🛠️ Technology Stack

### Frontend

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Fetch API**

### Backend

- **Node.js**
- **Express**
- **TypeScript**
- **OpenAI API**
- **Zod** (schema validation)

### Tooling & DX

- **Bun** (runtime & package manager)
- **Husky** (Git hooks)
- **ESLint**
- **Prettier**

---

## 📦 Project Structure

```
ai-chatbot/
├── README.md
├── bun.lock
├── package.json
├── index.ts
├── packages
│   ├── client
│   │   ├── src
│   │   │   ├── chat
│   │   │   │   ├── chatbot.tsx
│   │   │   │   ├── chatInput.tsx
│   │   │   │   ├── chatMessages.tsx
│   │   │   │   └── typingIndicator.tsx
│   │   │   ├── components/ui
│   │   │   ├── lib
│   │   │   └── main.tsx
│   │   └── vite.config.ts
│   └── server
│       ├── controllers
│       │   └── chat.controller.ts
│       ├── services
│       │   └── chat.service.ts
│       ├── repositories
│       │   └── conversation.repository.ts
│       ├── routes.ts
│       └── index.ts
└── tsconfig.json
```

---

## 📋 Prerequisites

Before running the project, ensure you have:

- **Bun** → [https://bun.sh/](https://bun.sh/)
- **OpenAI API Key** → [https://platform.openai.com/](https://platform.openai.com/)

---

## 🔐 Environment Variables

Create a `.env` file inside the **server package**:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

> ⚠️ Never commit `.env` files to version control.

---

## 🚀 Getting Started

### Frontend (Vite + React)

```bash
cd packages/client
bun install
bun run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

### Backend (Node + Express)

```bash
cd packages/server
bun install
bun run dev
```

Backend runs at:

```
http://localhost:3000
```

---

## 🔌 API Reference

### `POST /api/chat`

Send a message to the AI chatbot.

#### Request Body

```json
{
   "prompt": "Hello!",
   "conversationId": "uuid"
}
```

#### Validation Rules

- `prompt`: required, min 1 character, max 1000 characters
- `conversationId`: must be a valid UUID

#### Response

```json
{
   "message": "Hi! How can I help you today?"
}
```

---

## 🤖 OpenAI Integration

The backend uses the official OpenAI SDK:

```ts
import OpenAI from 'openai';

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});
```

Conversation context is preserved using the `conversationId`, allowing multi-turn conversations.

---

## 🐶 Husky (Git Hooks)

Husky ensures consistent code quality across the project.

### Installed Hooks

**pre-commit**

- ESLint checks
- TypeScript validation
- Prettier formatting

**commit-msg**

- Enforces conventional commit messages

### Setup Husky

```bash
bun install
bunx husky install
```

Add hooks:

```bash
bunx husky add .husky/pre-commit "bun run lint"
bunx husky add .husky/commit-msg "bunx commitlint --edit $1"
```

---

## 💬 Chat Flow

1. Frontend generates a `conversationId`
2. User sends a message
3. Backend validates input with Zod
4. Prompt is sent to OpenAI
5. AI response is returned
6. UI updates with typing indicator

---

## 🎨 UI Highlights

- User & bot chat bubbles
- Typing indicator
- Keyboard support (`Enter` / `Shift+Enter`)
- Error handling
- Fully responsive layout
- Styled with **Tailwind CSS + shadcn/ui**

---

## 🛠️ Future Improvements

- OpenAI streaming responses
- Authentication & rate limiting
- Message persistence (DB)
- Markdown rendering for AI responses
- Dark mode

---

## 📄 License

MIT License

---

## 🎉 Summary

This project demonstrates a **clean, scalable, full-stack chatbot architecture** using modern tools, best practices, and excellent developer experience.

Happy building 🚀
