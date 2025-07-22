# 🎯 Shootr — Classic Flash Game Reimagined in React

Shootr is a nostalgic `.swf` Flash game brought back to life using [Ruffle](https://ruffle.rs/), embedded within a modern **React** frontend and served using a lightweight **Express** backend.

> ⚡ Play Flash games without Flash Player, right inside modern browsers!

---

## 🌟 Features

- 🎮 Embed and play `.swf` games with Ruffle (Flash Player emulator)
- ⚛️ Built using React (with Framer Motion for smooth animations)
- 🎨 Clean, modern UI with CSS styling
- 🌐 Served with Express for easy local or production deployment
- 📦 Easy to build and host anywhere (Vercel, Render, Netlify)

---

## 🛠️ Tech Stack

| Layer       | Technology                     |
|-------------|---------------------------------|
| Frontend    | React, CSS, Framer Motion       |
| Backend     | Node.js, Express                |
| Flash Player| Ruffle (via CDN)                |
| Hosting     | Localhost or static deployment  |

---

## 📁 Project Structure

shootr-game/
├── client/ # React app
│ ├── public/
│ │ └── shoot.swf # Flash game file
│ ├── src/
│ │ └── App.jsx # Main UI with Ruffle embed
│ └── index.html
├── server/
│ └── index.js # Express server
└── package.json # Combined project dependencies

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. 📥 Clone the repository

```bash
git clone https://github.com/your-username/shootr-game.git
cd shootr-game
```

### 2. ⚛️ Set up the React frontend

```bash
cd client
npm install
npm run build
```

### 3. 🚀 Set up the Express backend

```bash
cd ../server
npm install
node index.js
```

Your game will now be live at: [http://localhost:5001](http://localhost:5001)


### 4. 📜 License

MIT License © 2025 Shubham Sharma
You are free to use, modify, and distribute this project with attribution.