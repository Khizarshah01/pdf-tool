import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // similar to function that is use to set the value from users/frontend.
  const [file,setFile] = useState(null);
  const [operation,setOperation] = useState("Compress");
  const [downloadUrl,setDownloadUrl] = useState('');


  // a function inner code. is similar that we declare the function name so we call it.
  const handleFileChange = (e)=>{
    setFile(e.target.files[0]);  
  }

  const handleOperationChange = (e)=>{
    setOperation(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('operation', operation);
  
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        responseType: 'blob',  // Expecting binary data as a response
      });
  
      // Create a URL for the downloaded file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);  // Set the download URL state
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  return (
    <div className="App">
    <h1>Upload Your PDF</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="compress">Compress</label>
      <input
        type="radio"
        id="compress"
        name="operation"
        value="compress"
        checked={operation === 'compress'}
        onChange={handleOperationChange}
      /><br/>
      <label htmlFor="split">Split</label>
      <input
        type="radio"
        id="split"
        name="operation"
        value="split"
        checked={operation === 'split'}
        onChange={handleOperationChange}
      /><br/>
      <input type="file" onChange={handleFileChange} accept="application/pdf" required /><br/>

      {/* upload button for submit the file to backend */}

      <button type="submit">Upload</button>
    </form>

    {downloadUrl && (
      <a href={downloadUrl} download="processed.pdf">
        Download Processed PDF
      </a>
    )}
  </div>
  );
}

export default App;
