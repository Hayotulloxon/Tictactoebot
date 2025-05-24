const { Telegraf, Markup } = require('telegraf');

// O'zingizning bot tokeningiz va sayt manzilingizni shu yerga yozing
const BOT_TOKEN = '7455849469:AAEAJPNHEWTGiwFztNl3qxYgDXe5FGcve84'; // <-- O'zgartiring!
const GAME_URL = 'https://hayotulloxon.github.io/tictactoe/'; // <-- O'zgartiring!

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
