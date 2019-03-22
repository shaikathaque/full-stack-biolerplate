const express = require('express');

const app = express();

require('./routes/helloRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
