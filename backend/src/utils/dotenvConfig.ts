/*
 * Configure dotenv to read the configuration file in the backend directory
 * regardless of the place from where node is run.
 * Priority .env.local > .env
 * Import this first in the app.
 */

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: [
    path.resolve(__dirname, '../../.env.local'),
    path.resolve(__dirname, '../../.env'),
  ]
});
