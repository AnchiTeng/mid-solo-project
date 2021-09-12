import React, { Fragment, useState } from "react";
import axios from "axios";



const MyVideo = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("abcd");
  const [uploadedFile, setUploadedFile] = useState({});
  
  const [fileFolder,setFileFolder] = useState([]);
  console.log('uploadedFile :>> ', uploadedFile);
  console.log('fileFolder:>>',fileFolder);
  

  const [ selectedFiles, setSelectedFiles ] = useState([]);

  
  
	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			 console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};
  const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <video
      key={photo}//photo
      width="320"
      height="240"
      controls
    >
      <source src={photo} type="video/mp4" />
    </video>
		});
	};

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    // setFileFolder(e.target.files[0].fileFolder);//9/12
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file); //'file' refers to  server.js 'post' const file = req.files.file;
    try {
      const res = await axios.post("/myvideo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFilename("coconuts");

      const { fileName, filePath, uploadDate,fileFolder } = res.data;
      const file = { fileName, filePath, uploadDate,fileFolder };
      //upload new file
      setUploadedFile(file);
      //push new file to fileFolder
      setFileFolder((prev) => prev.concat(fileFolder));
    } catch (err) {
      if (err.response.status === 500) {
        //setMessage('There was a problem with the server');
      } else {
        //setMessage(err.response.data.msg);
        
      }
      //setUploadPercentage(0)
      
    }
  };

  return (
    <Fragment>
      <div className="custom-file mb-4">
        <input
          type="file"
          multiple
          className="custom-file-input"
          id="customFile"
          onChange={onChange}
        />
        <label className="custom-file-label" htmlFor="customFile">
          {filename}
        </label>
        <button onClick={onSubmit}>Upload</button>
      </div>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">
              {uploadedFile.uploadDate} {uploadedFile.fileName}{" "}
            </h3>

            <video
              key={uploadedFile.filePath}
              width="320"
              height="240"
              controls
            >
              <source src={uploadedFile.filePath} type="video/mp4" />
            </video>

            <h2>
              video list: {uploadedFile.fileName}
              <input
                type="submit"
                value="delete"
                className="btn btn-primary btn-block mt-4"
              />
            </h2>
            <video
              key={uploadedFile.fileName}
              width="320"
              height="240"
              controls
            >
              <source src={fileFolder[0]} type="video/mp4" />
            </video>

          </div>
        </div>
        
				
      
      ) : null}
      
      <div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="material-icons">add_a_photo</i>
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
    </Fragment>
  );
};

//<img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />

export default MyVideo;

/*9/12: can upload and display multiple videos. How to delete specific video? how to combine display and upload files to upload folder?
Solved: 
1)has fileFolder to store uploaded video paths
2)can access video paths from fileFolder and consume them.

9/12: need to have an event handler/function to display all videos from fileFolder array. How to delete video? unlink? each video has delete button which has delete-handler? Deal with the case when choose exit file problems.(it did push duplicate path to fileFolder)
*/
