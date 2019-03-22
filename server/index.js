const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

// in production, serve build when user requests path '/'.
app.use(express.static('../client/build'));

require('./routes/helloRoutes')(app);

// routing requests from react router will be redirected to index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
