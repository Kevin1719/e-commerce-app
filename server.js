const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/e-commerce-app/index.html'));
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/e-commerce-app/' })
});
app.listen(process.env.PORT || 8080);
