# Markdown Notepad

## Introduction

This is the repository of my personal online **Notepad** using **Markdown** format.  
It includes the frontend as well as the backend.  
Frontend stack: **React**, **Vite**  
Backend stack: **Node.js**, **Express.js**, **Sequelize**, **MySQL**  
All the code is written in **TypeScript**.

Features:
- **Select** and **View** markdown notes.
- **Create**, **Delete**, **Rename**, **Edit** notes.

TODO:
- Buttons ergonomy
- Images import
- Re-ordering
- Responsivity for mobile browsers
- HTTPS
- User authentification and note attribution
- Backup

## Getting started

### Prerequisites

- git
- node >= 22
- npm >= 10
- MySQL server installed and running with:
  - databases *markdown_notepad* and *markdown_notepad_test*
  - user *webserver* and password *webserver* with rights on the previous databases

### Installation

```
git clone https://github.com/Guissey/markdown-notepad.git;
cd markdown-notepad/frontend && npm ci;
cd ../backend && npm ci;
```

### Production

- In *frontend* folder, build the frontend static files that will be used by the backend:
```
npm run build
```
- Then in *backend* folder, start server:
```
npm run start
```
- Application will be available at **http://localhost:3000** in any browser.

### Environment

Open two terminals:
- in *frontend*: `npm run dev`
- in *backend*: `npm run dev`

Application will be available at **http://localhost:5173** with automatic refresh on updates.
