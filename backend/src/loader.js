const server = require('./config/config');
require('./config/database');
require('./config/routes')(server);
