import React from "react";

const Form = props =>
  <div className="row">
    <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            Search Parameters
          </div>

          <div className="card-body">
            
          <form>
            <div className="form-group">
              <label>Search Term</label>
              <input
                type="text"
                className="form-control"
                name="searchTerm"
                value={props.searchTerm}
                onChange={props.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Start Year (Optional)</label>
              <input
                type="text"
                className="form-control"
                name="startYear"
                value={props.startyr}
                onChange={props.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>End Year (Optional)</label>
              <input
                type="text"
                className="form-control"
                name="endYear"
                value={props.endyr}
                onChange={props.handleInputChange}
              />
            </div>
          
            <button type ="submit" className="btn btn-secondary" onClick={props.handleFormSubmit}>Search</button>

          </form>
          </div>
        </div>
    </div> 
  </div> 



export default Form;