// Bad example
// function logdebug(message: string) {
//     console.log(`DEBUG: ${message}`);
// }

function logError(message: string) {
    console.log(`ERROR: ${message}`);
}

function logWarning(message: string) {
    console.log(`WARNING: $(message}`);

}

// Good exemple (refactored)
function logMessage(level: string, message: string) {
    console.log(`${level}: ${message}`);
}