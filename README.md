# Minecraft Bot (Hosted on Render)

A simple Minecraft bot using [mineflayer](https://github.com/PrismarineJS/mineflayer), deployable on [Render](https://render.com).

---

## 🚀 Features
- Connects to your **Aternos Minecraft server**
- Auto-reconnects if disconnected
- Anti-AFK (jumps every 5s)
- Self-pings every 4 minutes to stay awake on Render

---

## ⚙️ Setup

### 1. Edit Bot Settings
Open `index.js` and update:
const SERVER_HOST = 'your-aternos-server.aternos.me'; // change this
const SERVER_PORT = 12345; // change this
const BOT_USERNAME = 'RenderBot'; // change bot username
