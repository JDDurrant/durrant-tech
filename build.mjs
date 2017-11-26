import prompt from 'prompt';

prompt.start();

prompt.get([
	{
		name: 'host',
		description: 'host [127.0.0.1]'
	}, {
		name: 'port',
		description: 'port [3000]'
	}, {
		name: 'env',
		description: 'env [dev]'
	}], result => {
	
		const	host = result.host || '127.0.0.1',
			port = result.port || 3000,
			env = result.env || 'dev';
});

// pre-deployment scripts
// - generate .env file
// - compile front-end code (less, js modules, etc.)
//
// -> I might work on this file later on
