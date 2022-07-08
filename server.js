const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/e-commerceApp/'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: './dist/e-commerceApp/' })
})

app.listen(process.env.PORT || 8080)