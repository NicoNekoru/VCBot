const Discord = require("discord.js")
module.exports = async (oldState,newState,client) => {
	if (newState.channelID) { return newState.member.roles.add(newState.guild.roles.cache.array().find(ooga => ooga.name.toLowerCase() == "in vc")) } 
	else { return newState.member.roles.remove(newState.guild.roles.cache.array().find(ooga => ooga.name.toLowerCase() == "in vc"))}
}

