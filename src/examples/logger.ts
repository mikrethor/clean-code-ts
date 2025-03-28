import winston from 'winston';

// Création d'un logger Winston avec différents niveaux de logs
const logger = winston.createLogger({
    level: 'info', // Niveau minimum à logger
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Affiche dans la console
        new winston.transports.File({ filename: 'logs/errors.log', level: 'error' }) // Enregistre les erreurs dans un fichier
    ]
});

export default logger;
