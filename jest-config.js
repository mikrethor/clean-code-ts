module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript support
    testEnvironment: 'node', // Define the test environment (Node.js)
    globals: {
        'ts-jest': {
            isolatedModules: true, // Speed up the tests by running each test file in isolation
        },
    },
    moduleFileExtensions: ['ts', 'js'], // Support .ts and .js files
    transform: {
        '^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
    },
    testMatch: ['**/tests/**/*.test.ts'], // Path to your test files
};
