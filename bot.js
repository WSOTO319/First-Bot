require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js"); //require Client, GatewayIntentBits, and Partials

const client = new Client({
  //make a new client with intents
  intents: [
    //intents for what you want the bot to be able to do
    //intents for messages and guild
    //check documentation for all intents
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Message], // partial for messages that way if its an old message, the bot will still do something if a condition is met
  // ex.if i delete an older message the bot will still tell me not to delete messages
});

//variables for later use; helps make code cleaner
const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

function modUser(member) {
  // function to give a user the moderator role
  member.roles.add("1031664125262176277");
}

client.on("ready", () => {
  //when client is ready, console log a msg that says it is
  console.log("BOT IS READY TO GO!");
});

client.on("messageCreate", async (msg) => {
  // when a messge is created
  if (msg.content === "Hey what's your name bot?") {
    // if the msg asks the bot for its name
    try {
      // try a reply
      msg.reply("That would be Naruto! Believe It!"); // respond with name
    } catch (error) {
      // catch an error
      msg.channel("Error"); // send a msg saying LOL
    }
  }
  if (msg.content === "What's up Naruto?") {
    // if the msg asks whats up
    try {
      // try a reply
      msg.reply("Nothing much just working, you?"); // bot will respond with a msg saying its working
    } catch (error) {
      // catch an error
      msg.channel("Error"); // bot sends msg saying error
    }
  }
  if (msg.content === "Naruto is the best hokage!") {
    // if the message says the naruto is the best hokage
    try {
      // try a reaction
      msg.react("❤️"); // react to the message with a heart
    } catch (error) {
      // catch error
      msg.channel("Error"); // bot sends msg saying error
    }
  }
  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    // if messge is the bot prefix plus the mod command
    modUser(msg.member); // run the moderator function on that user
  }
});

client.on("messageDelete", async (msg) => {
  //if a user deletes a msg
  msg.channel.send("Stop deleting messages."); // bot sends a msg that tells user to stop deleting msgs
});

client.login(process.env.BOT_TOKEN || 8080); // client login
