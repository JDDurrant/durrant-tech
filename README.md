# Durrant.tech

My personal website

## Setup

**Step 0:** Install Node.js and NPM

GNUrds: [Install Node.js via package manager | nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

Windows, macOS: [Node.js | nodejs.org/](https://nodejs.org/en/)

In case you're wondering which version to use, the latest LTS release should be good enough.

**Step 1:** Install dependencies and build site

```bash
npm install
```

**Step 2:** Set environment variables in .env file

```env
NODE_ENV=production
PROTOCOL=https
API_HOST=api.durrant.tech
WWW_HOST=durrant.tech
PORT=8080
DB='localhost:27017/durrant-tech'
```

**Step 3:** 

```bash
npm start
```
