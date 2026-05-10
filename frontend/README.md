# Tic-Tac-Toe

A multi-session Tic-Tac-Toe app built with React + TypeScript + Vite. Each game session maintains its own state, and progress persists across page reloads via `localStorage`.

## Features

- Standard 3×3 board with X/O alternating turns
- Winner and draw detection with a result popup
- Multiple concurrent game sessions, switchable from the sidebar
- Per-session state (board, turn, winner) preserved independently
- Automatic persistence to `localStorage` — refresh the page and resume any game
- Reset, delete, and clear-all controls

## Tech Stack

- **React 19** with TypeScript
- **Vite** for dev server and build
- **React Context + `useReducer`** for global state
- **CSS** (per-component stylesheets, no UI library)

## Getting Started

### Prerequisites
- Node.js 20+ and npm

### Install dependencies
```bash
npm install
```

### Run the dev server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### Build for production
```bash
npm run build
```
Output goes to `dist/`.

### Preview the production build locally
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Run with Docker

A multi-stage `Dockerfile` builds the app with Node and serves the static output via nginx (~50 MB final image).

### Prerequisites
- Docker (Desktop or Engine)

### Build the image
```bash
docker build -t tic-tac-toe-frontend:latest .
```

### Run the container
```bash
docker run --rm -p 8080:80 tic-tac-toe-frontend:latest
```
Open http://localhost:8080 in your browser. Stop with `Ctrl+C`.

To run detached:
```bash
docker run -d --name tic-tac-toe -p 8080:80 tic-tac-toe-frontend:latest
docker stop tic-tac-toe && docker rm tic-tac-toe
```

## AI Assistance

I used Claude (via Claude Code) to help with planning and debugging during development.
