require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Message, Partials.Reaction],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

function modUser(member) {
  member.roles.add("1031664125262176277");
}

client.on("ready", () => {
  console.log("BOT IS READY TO GO!");
});

client.on("messageCreate", async (msg) => {
  if (msg.content === "Naruto, who is your wife?") {
    try {
      msg.reply("That would be Hinata! Believe It!");
    } catch (error) {
      msg.channel("LOL");
    }
  }
  if (msg.content === "What's good Naruto?") {
    try {
      msg.reply("Nothing much just chillin, you?");
    } catch (error) {
      msg.channel("LOL");
    }
  }
  if (msg.content === "Naruto is the best hokage!") {
    try {
      msg.react("❤️");
    } catch (error) {
      msg.channel("LOL");
    }
  }
  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

client.on("messageDelete", async (msg) => {
  msg.channel.send("Stop deleting messages.");
});

client.login(process.env.BOT_TOKEN);

/*try {
			msg.reply("Nothing much just chillin, you?");
		} catch (error) {
			// handle failure of any Promise rejection inside here❤️
		}*/
