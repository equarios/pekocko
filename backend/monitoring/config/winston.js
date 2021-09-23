var appRoot = require('app-root-path');
var winston = require('winston');


const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: `${appRoot}/monitoring/logs/activity.log`,
            level: 'info'
        }),
        new winston.transports.File({
            filename: `${appRoot}/monitoring/logs/error.log`,
            level: 'error'
        })
    ]
});



logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    },
};

module.exports = logger;