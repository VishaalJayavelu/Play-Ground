const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Connect DB
require('./db/connection');

//Import Files

const Users = require('./models/Users');
const Conversations = require('./models/Conversations');
const Messages = require('./models/Messages');
const Users2 = require('./models/Users2');

// app Use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

const port = process.env.PORT || 8000;

// Routes
app.get('/', (req, res) => {
     res.send('Welcome');
 })
 
 app.post('/api/register', async (req, res, next) => {
     try {
         const { fullName, email, password } = req.body;
 
         if (!fullName || !email || !password) {
             res.status(400).send('Please fill all required fields');
         } else {
             const isAlreadyExist = await Users.findOne({ email });
             if (isAlreadyExist) {
                 res.status(400).send('User already exists');
             } else {
                 const newUser = new Users({ fullName, email });
                 bcryptjs.hash(password, 10, (err, hashedPassword) => {
                     newUser.set('password', hashedPassword);
                     newUser.save();
                     next();
                 })
                 return res.status(200).send('User registered successfully');
             }
         }
 
     } catch (error) {
         console.log(error, 'Error')
     }
 })
 
 app.post('/api/login', async (req, res, next) => {
     try {
         const { email, password } = req.body;
 
         if (!email || !password) {
             res.status(400).send('Please fill all required fields');
         } else {
             const user = await Users.findOne({ email });
             if (!user) {
                 res.status(400).send('User email or password is incorrect');
             } else {
                 const validateUser = await bcryptjs.compare(password, user.password);
                 if (!validateUser) {
                     res.status(400).send('User email or password is incorrect');
                 } else {
                     const payload = {
                         userId: user._id,
                         email: user.email
                     }
                     const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';
 
                     jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 }, async (err, token) => {
                         await Users.updateOne({ _id: user._id }, {
                             $set: { token }
                         })
                         user.save();
                         return res.status(200).json({ user: { id: user._id, email: user.email, fullName: user.fullName }, token: token })
                     })
                 }
             }
         }
 
     } catch (error) {
         console.log(error, 'Error')
     }
 })
 
 app.post('/api/conversation', async (req, res) => {
     try {
         const { senderId, receiverId } = req.body;
         const newCoversation = new Conversations({ members: [senderId, receiverId] });
         await newCoversation.save();
         res.status(200).send('Conversation created successfully');
     } catch (error) {
         console.log(error, 'Error')
     }
 })
 
 app.get('/api/conversations/:userId', async (req, res) => {
     try {
         const userId = req.params.userId;
         const conversations = await Conversations.find({ members: { $in: [userId] } });
         const conversationUserData = Promise.all(conversations.map(async (conversation) => {
             const receiverId = conversation.members.find((member) => member !== userId);
             console.log(receiverId)
             const user = await Users.findById(receiverId);
             console.log(user)
             return { user: { receiverId: user._id, email: user.email, fullName: user.fullName }, conversationId: conversation._id }
         }))
         res.status(200).json(await conversationUserData);
     } catch (error) {
         console.log(error, 'Error')
     }
 })

app.listen(port, ()=>{
     console.log('listening on port: ' + port);
});
