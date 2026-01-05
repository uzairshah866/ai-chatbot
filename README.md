Simple Chatbot (Full Stack)

A simple full-stack chatbot application built with React + Vite on the frontend and Node.js + Express on the backend.
The chatbot integrates OpenAI for AI responses, maintains conversation context using a conversationId, and enforces code quality using Husky.

Tech Stack

Frontend:
Vite
React
TypeScript
Tailwind CSS
shadcn/ui
Fetch API

Backend:
Node.js
Express
TypeScript
OpenAI API
Zod (request validation)

Tooling & DX:
Bun (runtime & package manager)
Husky (Git hooks)
ESLint
Prettier

Project Structure
ai-chatbot/
├── README.md
├── bun.lock
├── index.ts
├── package.json
├── packages
│ ├── client
│ │ ├── README.md
│ │ ├── components.json
│ │ ├── eslint.config.js
│ │ ├── index.html
│ │ ├── package.json
│ │ ├── public
│ │ │ └── vite.svg
│ │ ├── src
│ │ │ ├── App.css
│ │ │ ├── App.tsx
│ │ │ ├── assets
│ │ │ │ └── react.svg
│ │ │ ├── chat
│ │ │ │ ├── chatInput.tsx
│ │ │ │ ├── chatMessages.tsx
│ │ │ │ ├── chatbot.tsx
│ │ │ │ └── typingIndicator.tsx
│ │ │ ├── components
│ │ │ │ └── ui
│ │ │ │ └── button.tsx
│ │ │ ├── index.css
│ │ │ ├── lib
│ │ │ │ └── utils.ts
│ │ │ └── main.tsx
│ │ ├── tsconfig.app.json
│ │ ├── tsconfig.json
│ │ ├── tsconfig.node.json
│ │ └── vite.config.ts
│ └── server
│ ├── README.md
│ ├── controllers
│ │ └── chat.controller.ts
│ ├── index.ts
│ ├── package.json
│ ├── repositories
│ │ └── conversation.repository.ts
│ ├── routes.ts
│ ├── services
│ │ └── chat.service.ts
│ └── tsconfig.json
└── tsconfig.json

Getting Started:
Prerequisites

Bun → https://bun.sh/

OpenAI API Key → https://platform.openai.com/

Environment Variables

Create a .env file inside the backend folder:

OPENAI_API_KEY=your_openai_api_key_here
PORT=3000

Never commit .env files.

Frontend Setup (Vite + React)
cd frontend
bun install
bun run dev

Runs at:

http://localhost:5173

Backend Setup (Node + Express)
cd backend
bun install
bun run dev

Runs at:

http://localhost:3000

API Reference
POST /api/chat

Send a message to the chatbot powered by OpenAI.

Request Body
{
"prompt": "Hello!",
"conversationId": "uuid"
}

Validation

prompt: required, min 1, max 1000 characters

conversationId: valid UUID

Response
{
"message": "Hi! How can I help you today?"
}

OpenAI Integration

The chatbot uses OpenAI to generate responses.

Example (backend service):

import OpenAI from 'openai';

const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
});

Conversation context is preserved using the conversationId.

Husky (Git Hooks)

Husky ensures code quality before commits.

Installed Hooks
pre-commit

Runs ESLint
Runs TypeScript checks
Formats code with Prettier
commit-msg
Enforces conventional commit messages

Setup Husky
bun install
bunx husky install

Add hooks:

bunx husky add .husky/pre-commit "bun run lint"
bunx husky add .husky/commit-msg "bunx commitlint --edit $1"

Chat Flow:
Frontend generates a conversationId
User sends a message
Backend validates request (Zod)
Prompt is sent to OpenAI
Response is returned to frontend
UI updates with typing indicator

UI Features:
User & bot chat bubbles
Typing indicator
Error handling
Keyboard support
Responsive layout
Styled with Tailwind + shadcn/ui
Future Improvements
Streaming responses (OpenAI streams)
Auth & rate limiting
Message markdown rendering

Built as a simple full-stack chatbot using modern web technologies.
