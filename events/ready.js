	module.exports = client => {
		console.log(`Online in ${client.guilds.cache.size} servers.`);
		client.user.setActivity('you deafen so I can add you to my hitlist', {type: 'WATCHING'})
	}
