// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

// Regular Expression Routes
app.get('/user(name)?', (req, res) => {
    res.send('Hello, Elida!');
});

// Error Handling
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

// Server Startup
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
