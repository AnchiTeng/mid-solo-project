const express = require('express');
const fileUpLoad = require('express-fileupload');

const app = express();

app.use(fileUpLoad());


app.get('/myvideo',(req,res)=>{
  
 const test = [{test:1}]
 
  res.send(test);
  
})

app.post('/myvideo',(req,res)=>{
  console.log('inside the myvideo endpoint');
  if(req.files === null){
    return res.status(400).json({msg:'no file upload'});
  }
  const file = req.files.file;
  console.log('list',req.body)
 

  

  //sending uploadfiles to uploads folder
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    
    let today = new Date().toISOString().slice(0, 10)
    //filePath is from uploads folder
   res.json({fileName:file.name, filePath: `/uploads/${file.name}`,uploadDate:today});
   

  

   
   
  })
  
})





app.get('/api/customer', (req,res)=>{
    const customer= [
      {id: 1, firstName: 'Angel', lastName:'Teng'},
      {id: 2, firstName: 'Finn', lastName:'Lo'}, 
      {id: 3, firstName: 'Sam', lastName:'Lo'}   
    ];

    res.json(customer);
})



const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));