import React, {Fragment,useState} from "react";
import axios from "axios";


const MyVideo = ()=> {
  
  const [ file, setFile] = useState('');
  const [ filename, setFilename] = useState('abcd');
  const [ uploadedFile, setUploadedFile] = useState({});
  
  
  const onChange= e =>{
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      //setFileList(e.target.files[0].fileList);
  }

  const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file',file)//'file' refers to  server.js 'post' const file = req.files.file;
      try{
        const res = await axios.post('/myvideo', formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
              },
            
        });
       
        const { fileName, filePath ,uploadDate} = res.data;
       
        setUploadedFile({ fileName, filePath ,uploadDate});
        //setFileList.push(fileName, filePath ,uploadDate)
      } catch(err) {
        if (err.response.status === 500) {
            console.log('There was a problem with the server');
            //setMessage('There was a problem with the server');
          } else {
            console.log(err.response.data.msg)  
            //setMessage(err.response.data.msg);
          }
          //setUploadPercentage(0)
        }
      };
      
      

  


  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
       
     </form>
     {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.uploadDate} {uploadedFile.fileName} </h3>
            
            
            <video key={uploadedFile.filePath} width="320" height="240" controls>
            <source src={uploadedFile.filePath} type="video/mp4" />
             </video>

            <h2> 
              video list: {uploadedFile.fileName}  
              <input
          type='submit'
          value='delete'
          className='btn btn-primary btn-block mt-4'
        />
            </h2>
             
          </div>
        </div>
      ) : null}

        

    </Fragment>
  )
};

//<img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />

export default MyVideo;
