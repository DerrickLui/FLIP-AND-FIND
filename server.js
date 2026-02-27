const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set headers for Godot web exports (COOP/COEP)
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
    console.log(`Memory Game server running at http://localhost:${port}`);
});
