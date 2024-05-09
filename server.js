require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// It's not necessary to call dotenv.config() a second time, so we remove it.
require('./startup/logging')();
require('./services/database.service')();
require('./startup/routes')(app);

// Scheduling Cron Job
require('./startup/cron-job');

app.listen(port, () => console.log(`SERVER LISTENING ON PORT ${port}`));
