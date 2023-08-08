const path =require("path");
const fs = require("fs");
const users = require("../models/users.model");

function number(str){
     return /\d/.test(str);
}

function specialCharacter(str){
     return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}

function exits(str){
     for(let i = 0; i < users.length;i++){
          if(users[i].usernames==str){
               return true;
          }
     }
     return false;
}

function signInForm(req,res){
     const dir=path.join(__dirname,'..','public','landing.hbs');
     let text=`<center>\n<button onclick="window.location.href='/'">Home</button>\n<button onclick="window.location.href='/SignIn'">Sign In</button>\n<button onclick="window.location.href='/SignUp'">Sign Up</button>\n</center>\n<center>\n<h2 class="error">{{messages}}</h2>\n</center>\n<center><form method="post">\n<label for="Usernames">Username:</label>\n<input type="text" name="Usernames"><br><br>\n<label for="Passwords">Password:</label>\n<input type="Password" name="Passwords"><br><br>\n<button type="submit" class="submit">Submit</button>\n</form></center>`;

     fs.writeFileSync(dir,text);
     return res.status(200).render('landing',{
          title : '| Sign In',
          messages:'Enter your username and password',
     });
}

function signUpForm(req,res){
     const dir=path.join(__dirname,'..','public','landing.hbs');
     let text=`<center>\n<button onclick="window.location.href='/'">Home</button>\n<button onclick="window.location.href='/SignIn'">Sign In</button>\n<button onclick="window.location.href='/SignUp'">Sign Up</button>\n</center>\n<center>\n<h2 class="error">{{messages}}</h2>\n</center>\n<center>\n<form method="post">\n<label for="FirstName">First Name:</label>\n<input type="text" name="FirstName" value="{{FirstName}}"><br><br>\n<label for="LastName">Last Name:</label>\n<input type="text" name="LastName"value="{{LastName}}"><br><br>\n<label for="Usernames">Username:</label>\n<input type="text" name="Usernames" value="{{Usernames}}"><br><br>\n<label for="Passwords">Password:</label>\n<input type="Password" name="Passwords" id="Passwords" value="{{Passwords}}"><br><br>\n<label for="ConfirmPasswords">Confirm Password:</label>\n<input type="Password" name="ConfirmPasswords" id="ConfirmPasswords" value="{{ConfirmPasswords}}"><br><br>\n<input name="ShowPassword" type="checkbox" onclick="ShowPassword()">ShowPassword<br><br>\n<button type="submit">Submit</button>\n</form>\n</center>`;
     
     fs.writeFileSync(dir,text);
     return res.status(200).render('landing',{
          title : '| Sign Up',
          messages:'Enter your details here',
     });
}

function signIn(req, res) {
     for(let i=0;i<users.length;i++) {
          console.log(`${users[i].usernames} == ${req.body.Usernames} && ${users[i].passwords} == ${req.body.Passwords}`);
          if(users[i].usernames==req.body.Usernames&&users[i].passwords.toString()==req.body.Passwords) {
               console.log(`${users[i].usernames} == ${req.body.Usernames} && ${users[i].passwords} == ${req.body.Passwords}`);
               return res.status(200).render('landing',{messages:`username:${req.body.Usernames} password:${req.body.Passwords}`});
          }
     }
     return res.status(404).render('landing',{
          title : '| Sign In',
          messages:'Invalid username/password',
     });
}

function signUp(req, res) {
     const dir=path.join(__dirname,'..','models','users.model.js');
     if(req.body.FirstName==''||number(req.body.FirstName)||specialCharacter(req.body.FirstName)){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Invalid First Name',
               LastName : `${req.body.LastName}`,
               Usernames : `${req.body.Usernames}`,
               Passwords : `${req.body.Passwords}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }
     if(req.body.LastName==''||number(req.body.LastName)||specialCharacter(req.body.LastName)){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Invalid Last Name',
               FirstName : `${req.body.FirstName}`,
               Usernames : `${req.body.Usernames}`,
               Passwords : `${req.body.Passwords}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }
     if(req.body.Usernames==''){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Invalid Username',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Passwords : `${req.body.Passwords}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }else if(req.body.Usernames==req.body.FirstName||req.body.Usernames==req.body.LastName||req.body.Usernames==req.body.LastName.concat(req.body.FirstName)||req.body.Usernames==req.body.FirstName.concat(req.body.LastName)){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Username shoud not contain your name',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Passwords : `${req.body.Passwords}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }else if(exits(req.body.Usernames)){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Username already exits please try again with different name',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Passwords : `${req.body.Passwords}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }
     if(req.body.Passwords==''){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Invalid Password',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Usernames : `${req.body.Usernames}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }else if(req.body.Passwords.length<8){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Password should be atleast 8 characters with 1 sepical character and 1 number character',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Usernames : `${req.body.Usernames}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }else if(req.body.Passwords.length>15){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Password should not exceed 15 characters with 1 sepical character and 1 number character',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Usernames : `${req.body.Usernames}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }else if(!number(req.body.Passwords)||!specialCharacter(req.body.Passwords)){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Password should have 1 sepical character and 1 number character',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Usernames : `${req.body.Usernames}`,
               ConfirmPasswords : `${req.body.ConfirmPasswords}`,
          });
     }
     if(req.body.ConfirmPasswords==''||req.body.Passwords!=req.body.ConfirmPasswords){
          return res.status(404).render('landing',{
               title : '| Sign Up',
               messages:'Password does not matches',
               FirstName : `${req.body.FirstName}`,
               LastName : `${req.body.LastName}`,
               Usernames : `${req.body.Usernames}`,
               Passwords : `${req.body.Passwords}`,
          });
     }
     let text=`const users=[\n`;
     for(let i=0; i<users.length; i++){
          text += `{\nusernames : '${users[i].usernames}',\nfname : '${users[i].fname}',\nlname : '${users[i].lname}',\npasswords : '${users[i].passwords}',\n},`;
     }
     text+=`{\nusernames : '${req.body.Usernames}',\nfname : '${req.body.FirstName}',\nlname : '${req.body.LastName}',\npasswords : '${req.body.Passwords}',\n}\n];\n\nmodule.exports=users;`;
     fs.writeFileSync(dir,text);
     return res.status(200).render('landing',{
          title : '| Sign Up',
          messages:'created new user successfully',
     });
}

module.exports = {
     signInForm,
     signUpForm,
     signIn,
     signUp,
};