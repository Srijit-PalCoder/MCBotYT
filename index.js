const mineflayer = require('mineflayer');
const express = require('express');
const axios = require('axios');

const SERVER_HOST = 'chillsmp60976.aternos.me';
const SERVER_PORT = 48997;
const BOT_USERNAME = 'MCBotYT';

const WEB_PORT = process.env.PORT || 3000;
const SELF_URL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${WEB_PORT}`;
let bot;

// Express app for Render health checks
const app = express();
app.get('/', (req, res) => res.send('✅ Bot is running!'));

app.listen(WEB_PORT, () => {
  console.log(`🌐 Web server running on port ${WEB_PORT}`);
  console.log(`🔗 Self URL: ${SELF_URL}`);
});

// Create bot
function startBot() {
  bot = mineflayer.createBot({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: BOT_USERNAME,
  });

  bot.on('login', () => {
    console.log('🤖 Bot logged in successfully!');
  });

  bot.on('spawn', () => {
    console.log('🎮 Bot spawned, keeping it alive...');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 5000);
  });

  bot.on('end', () => {
    console.log('🔄 Bot disconnected, reconnecting...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('❌ Error:', err.message);
  });
}

startBot();

// 🔄 Self-ping every 4 minutes
setInterval(async () => {
  try {
    const res = await axios.get(SELF_URL);
    console.log(`🏓 Self-ping success (${res.status})`);
  } catch (err) {
    console.log(`⚠️ Self-ping failed: ${err.message}`);
  }
}, 4 * 60 * 1000);
