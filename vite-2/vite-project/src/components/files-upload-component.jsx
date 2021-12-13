/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'

export class FilesUploadComponent extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <form >
            <h3>React File Upload</h3>
            <div className="from-group">
              <input type="file" />
            </div>
            <div className="form-group">
              <button className='btn btn-primary' type='submit'>Upload</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FilesUploadComponent
