function someRiskyOperation(): void {
    throw new Error('Operation failed');
}

try {
    someRiskyOperation();
} catch (e) {
    // ❌ Mauvaise pratique : l'erreur est ignorée
}

