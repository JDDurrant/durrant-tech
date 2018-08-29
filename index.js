require('dotenv').config();

const api = require('./api/bin/server').default;
const www = require('./apps/www/bin/server').default;

const host = process.env.WWW_HOST;
const port = process.env.WWW_PORT;

www.use('/api', api);

www.listen(port, host, () => console.log(`Listening on http://${host}:${port}...`));
