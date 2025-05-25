const { Telegraf, Markup } = require('telegraf');
const express = require('express');

// Token va sayt manzili
const BOT_TOKEN = '7455849469:AAEAJPNHEWTGiwFztNl3qxYgDXe5FGcve84';
const GAME_URL = 'https://hayotulloxon.github.io/tictactoe/';

// Render URL'ni shu formatda yozing (o'zingizning .onrender.com bilan)
const RENDER_EXTERNAL_URL = 'https://tictactoebot-meer.onrender.com'; // <-- O'ZGARTIRING

const bot = new Telegraf(BOT_TOKEN);

// === Bot komandalar ===
bot.start((ctx) => {
  ctx.reply(
    "Assalomu alaykum!\n\nTic Tac Toe o‘yiniga xush kelibsiz.\nQuyidagi tugmani bosing va o‘ynashni boshlang!",
    Markup.inlineKeyboard([
      [Markup.button.url("O‘yin boshlash", GAME_URL)]
    ])
  );
});

bot.command('game', (ctx) => {
  ctx.reply(
    "O‘yin boshlash uchun tugmani bosing:",
    Markup.inlineKeyboard([
      [Markup.button.url("O‘yin boshlash", GAME_URL)]
    ])
  );
});

// ===== EXPRESS VA WEBHOOK =====
const app = express();
const port = process.env.PORT || 3000;

// Botni webhook sifatida Express'ga ulaymiz
app.use(bot.webhookCallback(`/telegraf/${BOT_TOKEN}`));

// Ping uchun oddiy endpoint
app.get("/", (req, res) => {
  res.send("Tic Tac Toe Telegram bot ishlayapti!");
});

// Webhook URL ni o'rnatamiz
app.listen(port, async () => {
  const webhookUrl = `${RENDER_EXTERNAL_URL}/telegraf/${BOT_TOKEN}`;
  await bot.telegram.setWebhook(webhookUrl);
  console.log(`Bot ishlayapti! Webhook: ${webhookUrl}`);
});
