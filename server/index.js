const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

require('./routes/helloRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
