module.exports = client => {
	console.log(`Online in ${client.guilds.cache.size} servers for ${client.users.cache.size} users on ws ${client.ws.gateway}.`);
	client.user.setActivity('you deafen so I can add you to my hitlist', {type: 'WATCHING'})
}
