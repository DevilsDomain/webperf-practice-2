// server/app.js
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Define other routes or middleware as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
