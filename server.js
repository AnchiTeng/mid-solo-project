const express = require("express");
const fileUpLoad = require("express-fileupload");
const fs = require("fs");
const app = express();
const cors = require('cors');
//const singUpTemplateCopy = require('./client/public/signupDB/models/signupModel');//??

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./client/public/signupDB/routes/route');

//dotenv.config();

console.log(process.env.databaseAccess)
    mongoose.connect("mongodb+srv://h0492763273:h0492763273@cluster0.2at03.mongodb.net/myTable?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true},()=>console.log('database connected'));

app.use(fileUpLoad());
app.use(cors());
app.use(express.urlencoded())//9/15 check

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)


app.get('/login',(req,res)=>{
  return res.status(200).send('get login');
})

app.post("/login", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

app.post("/register", (req, res)=> {
  const { name, email, password} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const user = new User({
              name,
              email,
              password
          })
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
  
}) 

app.get("/video", (req, res) => {
  const test = [
   
    {  id: 1,
       uuid: 1,
       url: "https://www.w3schools.com/tags/movie.mp4",
       title: "A day at Work",
       author: "Sam",
       uploadAt: "1",
       converted: true
      },
     
  ];
  const uploads = fs.readdirSync('./client/public/uploads')
  
  
   console.log('uploads >>>',uploads); 


  return res.json(uploads);
});


 app.delete('/video/:id',(req,res)=>{
  console.log("****in delete *****") 
  

  const fileName = req.params.id 
  fs.unlink(`./client/public/uploads/${fileName}`,(err)=>{
    if(err){ return res.status(500).send(err)
    }else{
    const uploads = fs.readdirSync('./client/public/uploads')

      

  console.log('before uploads',uploads)
  for(let i=0 ;i<uploads.length;i++){
    uploads[i]="/uploads/" + uploads[i];
  }
      console.log('after send uploads',uploads)
      return res.status(200).send(uploads);
    }
  });//use dir__

  
 })


app.post("/myvideo", (req, res) => {
  console.log("inside the myvideo endpoint");
  if (req.files === null) {
    return res.status(400).json({ msg: "no file upload" });
  }
  const fileFolder = []; 
  
  const file = req.files.file;
  console.log("list", req.files);
  
  

  //sending uploadfiles to uploads folder
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    let today = new Date().toISOString().slice(0, 10);
    fileFolder.push(`/uploads/${file.name}`);//9/12
    
    //filePath is from uploads folder
    //res.status(201).json() 201=>update successfully
    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
      uploadDate: today,
      fileFolder
    });
  });
});

app.get("/videoslide", (req, res) => {
  
     
  
  const uploads = fs.readdirSync('./client/public/uploads')
  
  for(let i=0 ;i<uploads.length;i++){
    uploads[i]="/uploads/" + uploads[i];
  }
   console.log('uploads in videoslide >>>',uploads); 


  return res.json(uploads);
});

// app.post('/signup',(req,res)=>{
//   const singedUpUser = new singUpTemplateCopy({
//       fullName:req.body.fullName,
//       userName:req.body.singUpUser,
//       email:req.body.email,
//       password:req.body.password
//   })
//     singedUpUser.save()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => {
//         res.json(err);
//     })
//   })




app.get("/api/customer", (req, res) => {
  const customer = [
    { id: 1, firstName: "Angel", lastName: "Teng" },
    { id: 2, firstName: "Finn", lastName: "Lo" },
    { id: 3, firstName: "Sam", lastName: "Lo" },
  ];
  res.json(customer);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

/*
9/13 Do i need cors?
*/
