const express = require('express');
const app = express();

const userRoutes = require('./api/user/user');

app.use('/user', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
