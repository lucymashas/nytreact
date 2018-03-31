import React, { Component } from "react";
import Form from "./Form";
import API from "../utils/API";
import SearchResults from "./SearchResults/";


class Search extends Component{
   constructor (props){
      super (props)
         this.state = {
            searchTerm: "",
            numResults: 0,
            startYear: "",
            endYear: "",
            results: [],
        };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
   }
    

    searchArticles = query => (
      API.search(query)
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({results: res.data.response.docs});
        }).catch(err => console.log(err))
    );
  

    handleInputChange = event => {
      let value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]:value
    });
  };

    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      let query = "";
      if (this.state.searchTerm)
        query = query+ this.state.searchTerm;

      if (parseInt(this.state.startYear, 10)) {
        query = query + "&begin_date=" + this.state.startYear + "0101";
        }

      if (parseInt(this.state.endYear, 10)) {
        query= query + "&end_date=" + this.state.endYear + "0101";
      }
      this.searchArticles(query);
    };

  render () {
    return (
      <div>
         
        <Form handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  };

};

  export default Search;