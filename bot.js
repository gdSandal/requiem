const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'b!ping') {
    msg.reply({embed: {
  color: 3447003,
  description: "pong"
}});

client.on('message', msg => {
  if (msg.content === 'b!info') {
    msg.reply({embed: {
  color: 3447003,
  description: "v0.1.2!"
}});
    
client.on('message', msg => {
  if (msg.content === 'b!embed') {
    msg.reply({embed: {
  color: 3447003,
  description: "This is an embed!"
}});

client.login(process.env.BOT_TOKEN);
