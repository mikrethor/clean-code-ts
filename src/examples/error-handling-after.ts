import logger from './logger';

class BusinessError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'BusinessError';
    }
}

function someRiskyOperation(): void {
    throw new BusinessError('Operation failed');
}

try {
    someRiskyOperation();
} catch (e: unknown) {
    if (e instanceof BusinessError) {
        logger.error(`[CustomError] ${e.message}`);
    } else if (e instanceof Error) {
        logger.error(`[Erreur] ${e.message}`);
    } else {
        logger.error('An unknown error occured');
    }
}

