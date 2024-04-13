import React from 'react';
import './UploadVideoPage.css'; // Ensure this CSS file is created with styles

function UploadVideoPage() {
    return (
        <div className="upload-container">
          <h1>Upload Video</h1>
          <div className="form-row">
            <div className="left-column">
              <label htmlFor="videoLabel">Video Label</label>
              <input type="text" id="videoLabel" placeholder="Label" />
    
              <label htmlFor="department">Department</label>
              <input type="text" id="department" placeholder="Label" />
            </div>
            <div className="right-column">
              <label htmlFor="description">Description</label>
              <textarea id="description" placeholder="Label"></textarea>
            </div>
          </div>
          <div className="file-upload-box">
            <div className="file-upload-content">
              Select a file or drag and drop here
              <br />
              JPG, PNG, or PDF, file size no more than 10MB
            </div>
            <button type="button" className="select-file-btn">SELECT FILE</button>
          </div>
          <h2>Uploaded Videos</h2>
          {/* ... Rest of your component */}
        </div>
      );
    }
    
    export default UploadVideoPage;