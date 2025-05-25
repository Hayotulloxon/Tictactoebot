const { Telegraf, Markup } = require('telegraf');
const express = require('express'); // <-- ping uchun express

// Bot token va sayt manzili
const BOT_TOKEN = '7455849469:AAEAJPNHEWTGiwFztNl3qxYgDXe5FGcve84';
const GAME_URL = 'https://hayotulloxon.github.io/tictactoe/';

const bot = new Telegraf(BOT_TOKEN);

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

bot.launch();
console.log("Bot ishga tushdi!");

// ==== Express miniserver (ping uchun) ====
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Tic Tac Toe Telegram bot ishlayapti!");
});
app.listen(port, () => {
  console.log(`Web server http://localhost:${port} da ishlamoqda`);
});
