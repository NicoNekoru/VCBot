const runEvent = (event) => require(`./events/${event}`);
module.exports = client => {
	client.on('ready', () => runEvent('ready')(client));
	client.on('voiceStateUpdate', (oldState,newState) => runEvent('voiceStateUpdate')(oldState,newState,client));
};

