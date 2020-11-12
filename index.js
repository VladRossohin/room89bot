require("dotenv").config();

var TelegramBot = require("node-telegram-bot-api"),
 telegram = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

telegram.onText("/kod_stolovka", (msg) => {
 telegram.sendMessage(msg.chat.id, "Kod Stolovka");
});

telegram.on("text", (message) => {
 telegram.sendMessage(message.chat.id, "Hello world");
});
