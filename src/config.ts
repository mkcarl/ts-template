import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local if it exists, else from .env
dotenvConfig({
    path: resolve(__dirname, '..', '.env.local'),
});

// Fallback to .env if .env.local doesn't exist
if (!process.env.NODE_ENV) {
    dotenvConfig({
        path: resolve(__dirname, '..', '.env'),
    });
}

// Export the required configuration variables
export const config = {
    PROJECT_NAME: process.env.PROJECT_NAME as string,
    LOG_LEVEL: process.env.LOG_LEVEL as string,
    MONGODB_URI: process.env.MONGODB_URI as string,
};
