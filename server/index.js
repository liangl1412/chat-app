import path from 'path';
import Express from 'express';
import socket from 'socket.io';
import passportSetup from './config/passport';
import mongoose from 'mongoose';
import config from './config/config';
import authRoute from './route/auth-route';
import userRoute from './route/user';
import renderHtml from './renderHtml';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import { addFriend, findAllUsers } from './lib/user';
const app = Express();
// connect to mongodb
mongoose.connect(config.mongodb.host, () => {
  console.log('db connected');
});

const db = mongoose.connection;
mongoose.set('debug', true);
app.use(Express.static(path.resolve(__dirname, '../public')));


// const data = [
//   {
//     text:"我是笨蛋",
//     user:"Yi Zhou",
//     ts:"1519611003"
//   },
//   {
//     text:"我是笨蛋",
//     user:"Yi Zhou",
//     ts:"1519693003"
//   },
//   {
//     text:"嗯，你说的对！",
//     user:"Yi Zhou",
//     ts:"1519693003"
//   },
//   {
//     text:"你在跟我说话么",
//     user:"Yi Zhou",
//     ts:"1519693003"
//   }
// ]



// app.get('/getMessages',function(req,res){
//   res.json(data);
// })

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys:[config.session.cookieKey]
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoute);
app.use('/user', userRoute);


const initData = async (req, res) => {
  let initState = {
    user: {}
  }
  if(!req.user){
    initState.user.username = 'guest';
  } else {
    initState.user = req.user;
    const users = await findAllUsers();
    initState.user.recentConversation = users;
  }

  res.send(renderHtml(initState));
}

app.get('*',  (req, res) => {
  initData(req, res);
})



const server = app.listen(3000,function(){
  console.log('listening port 3000');
})


const io = socket(server);

io.on('connection', function(socket){
  console.log('a user connected',socket.id);
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  })
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data)
  })
});



