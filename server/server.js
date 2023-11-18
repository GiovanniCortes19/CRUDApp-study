const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES
const authRoute = require('./routes/authRoute');

app.use('/auth', authRoute);

// HOME
app.get('/', (req, res) => {
  console.log('Got the home page');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// 404 HANDLER
app.use('*', (req, res) => {
  console.log('404 Route Handler');
  res.status(404).send('This Page Does Not Exist...');
});

// CONNECT TO SERVER
app.listen(3000, () => {
  console.log('listening on PORT 3000...');
});
