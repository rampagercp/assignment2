import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// MODULES FOR AUTHENTICATION
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

// MODULES FOR CORS
import cors from 'cors';  

// AUTHENTICATION OBJECTS
let localStrategy = passportLocal.Strategy; // alias
import User from '../Models/user';

// MODULE FOR AUTHENTICATION MESSAGING AND ERROR MANAGEMENT
import flash from 'connect-flash';

// ATTACH ROUTER FILES
import indexRouter from '../Routes/index';
import clothingRouter from '../Routes/clothing';

// Express Web App Configuration 
const app = express();
export default app;



//DB Configuration 
import * as DBConfig from "./db";
mongoose.connect(DBConfig.RemoteURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function ()
{
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
})

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, "../../node_modules")))

// ADD SUPPORT FOR CORS
app.use(cors());

// SETUP EXPRESS SESSION
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false

  }));
  
// INITIALIZE FLASH
app.use(flash());

// INITIALIZE PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// IMPLEMENT AUTHENTICATION STRATEGY
passport.use(User.createStrategy())

// SERIALIZE AND DESERIALIZE USER DATA
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routing happens here
app.use('/', indexRouter);
app.use('/clothing-list', clothingRouter); //defines a new area called clothing-list

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;