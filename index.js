const discord = require('discord.js');
const { Client, Events, GatewayIntentBits } = discord;
require('dotenv').config();
const { token } = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.GUILDS] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);