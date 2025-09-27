Server for portfolio app

This folder contains the Express server that provides API endpoints used by the client.

Quick start (development)

1. Copy `.env.example` to `.env` and fill in `MONGODB_URI` if you use a database.
2. Install dependencies from the `server` folder:

```powershell
cd server
npm install
```

3. Start the server in development (with nodemon):

```powershell
npm run dev
```

This will run the server on `http://localhost:5000` by default. The server expects the client dev server to run at `http://localhost:5173` (Vite) — you can override this with `CLIENT_ORIGIN` in your `.env`.

Production

1. Build the client from the `client` folder (creates `client/dist`):

```powershell
cd client
npm install
npm run build
```

2. Set `NODE_ENV=production` and ensure `MONGODB_URI` is set in `.env`, then start the server:

```powershell
cd server
npm start
```

The server will serve static files from `../client/dist` and provide API endpoints under `/api/*`.
