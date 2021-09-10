const express = require('express');
const fileUpLoad = require('express-fileupload');

const app = express();

app.use(fileUpLoad());




app.post('/myvideo',(req,res)=>{
  if(req.files === null){
    return res.status(400).json({msg:'no file upload'});
  }
  const file = req.files.file;

  //sending uploadfiles to uploads folder
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    //filePath is from uploads folder
   return res.json({fileName:file.name, filePath: `/uploads/${file.name}`})
  })
  
})

app.get('/api/customer', (req,res)=>{
    const customers = [
      {id: 1, firstName: 'Angel', lastName:'Teng'},
      {id: 2, firstName: 'Finn', lastName:'Lo'}, 
      {id: 3, firstName: 'Sam', lastName:'Lo'}   
    ];

    res.json(customers);
})



const port = 5000;

app.listen(port, () => console.log('Server started on port ${port}'));
