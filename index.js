const discord = require('discord.js');
const { Client, Events, GatewayIntentBits } = discord;
require('dotenv').config();
const { token } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);