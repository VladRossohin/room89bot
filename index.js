require("dotenv").config();

const User = require("./users");
const mongoose = require("mongoose");
const chat_id = "@room89_bot";

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

var TelegramBot = require("node-telegram-bot-api"),
  telegram = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

telegram.onText(/\/start/, (msg) => {
  const user = new User({
    id: msg.from.id,
    first_name: msg.from.first_name,
    last_name: msg.from.last_name,
    username: msg.from.username,
    language_code: msg.from.language_code,
  });

  console.log(user.username);
  console.log(`is in db: ${User.findOne({ username: user.username }) != null}`);

  if (
    User.findOne({
      id: user.id,
    }) == null
  ) {
    user.save();
  }
  telegram.sendMessage(
    msg.chat.id,
    `АХАХАХАХАХХАХАХАХАХАХХАХАХАХАХ \nИщи себя в прошмандовках Азербайджана, \n${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`
  );
});

telegram.onText(/\/kod_stolovka/, (msg) => {
  // telegram.sendMessage(msg.chat.id, "Kod Stolovka");
  for (var user of User.find()) {
    telegram.sendMessage(user.id, "KOD STOLOVLKA");
  }
});

telegram.on("polling_error", (err) => {
  console.log(err);
  console.log("------");
});

// telegram.on("text", (message) => {
//   telegram.sendMessage(message.chat.id, "Hello world");
// });
