import React from 'react';
import Compres from './Compress.module.css';

function Compress() {
  return (
    <div className="bodys">
      <h2>Compress</h2>
      
      <form className={Compres.formdiv} action="http://localhost:5000/compress" method="post" encType="multipart/form-data">
        <input type='file' accept="application/pdf" ></input>
        <div className={Compres.radioGroup}>
          <div>
          <input type="radio" id="low" name="compression" value="low" className={Compres.radioInput} />
          <label htmlFor="low" className={Compres.label}>Low</label>
          </div>
        
        <div>
          <input type="radio" id="medium" name="compression" value="medium" className={Compres.radioInput} />
          <label htmlFor="medium" className={Compres.label}>Medium</label>
        </div>
        
        <div>
          <input type="radio" id="high" name="compression" value="high" className={Compres.radioInput} />
          <label htmlFor="high" className={Compres.label}>High</label>
        </div>
        </div>
        <input className={Compres.submitButton} type='submit' value={"Submit Pdf"}></input>
      </form>
    </div>
  );
}

export default Compress;
