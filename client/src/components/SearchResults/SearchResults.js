import React from "react";
import "./SearchResults.css";

const SearchResults = props =>
  <div className="row" style={{ marginTop: 30 }}>
    <div className="col-sm-12">
        <div className="card">
            <div className="card-header">
              Top Articles
            </div>
            <div className="card-body">

              {props.results.slice(0, 5).map(
                (result) =>
                    <div className = "outline" key={result.id}>
                      <h3>{result.headline.main}</h3>
                      <p>{result.pub_date}</p>
                      <p>{result.web_url}</p>
                      
                      <button type="button" className="btn savebtn">Save Article</button>
                    </div>
                 )}


            </div>
        </div>
    </div>
  </div>


export default SearchResults;