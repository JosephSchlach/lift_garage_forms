
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const formRouter = require('./routes/form.router');
const diagRouter = require('./routes/diag.router');
const prepurchaseRouter = require('./routes/prepurchase.router');
const vinRouter = require('./routes/vin.router')
const checkoutRouter = require('./routes/checkout.router');
const carRouter = require('./routes/car.router')
const addJobRouter = require('./routes/job.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/form', formRouter);
app.use('/api/diag', diagRouter);
app.use('/api/prepurchase', prepurchaseRouter);
app.use('/api/vin', vinRouter)
app.use('/api/car', carRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/job', addJobRouter);
// app.use('/api/shelf', shelfRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});