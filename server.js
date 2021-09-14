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
  const uploads = [];//to store uploaded files in "./client/public/uploadss"
  

  uploads.push(fs.readdirSync('./client/public/uploads').forEach(file => {
    console.log(file);
    uploads.push(file);
   
  }));
   uploads.pop();//don't know why there is a null item in the end;
   console.log('uploads >>>',uploads); 

  return res.send(uploads);
});

//app.delete 1)readfile=>uploads 2)req.body 3)froentend onDelete

app.delete('/video',(req,res)=>{
  console.log("---DELETE Request Called---");
  let fileToDelete = req.files.file;
  console.log('fileToDelete >>>',fileToDelete);

});


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
