const express = require("express");
const fileUpLoad = require("express-fileupload");
const fs = require("fs");
const app = express();
const cors = require('cors');

app.use(fileUpLoad());
app.use(cors());

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
