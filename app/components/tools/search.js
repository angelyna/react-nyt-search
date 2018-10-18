const React = require('react');


let Search = React.createClass({
  getInitialState: function() {
    return {
    	q: "",
    	begin_date: "yyyymmdd",
    	end_date: "yyyymmdd",
      toggle: false
    };
  }, 
  componentDidMount: function() {
    document.getElementById('submit-button').addEventListener('keypress', function(e) {
      if(e.which === 13) {
        this._handleSubmit(e);
      }
    });
  },
  _handleChangeQ: function(event) {
  	this.setState({
  		q: event.target.value,
  	});
  },

  _handleSubmit: function(e) {   
    e.preventDefault(); 
  	this.props._nytGet(this.state.q, this.state.begin_date, this.state.end_date);
  	this.setState({
  		q: "",
  		begin_date: "yyyymmdd",
  		end_date: "yyyymmdd", 
  	});
    this.props._toggleResults();
  },

  render: function() {
    return (		

		<div className="container">
      <div className="row row-search-title">
        <div className="col col-sm-12 col-search-title">
              <h2><i className="fa fa-search"></i>  NYT Search</h2>
        </div>
      </div>
      <div className="row row-search-results">
        <form onSubmit={this._handleSubmit}>
          <div className="col col-sm-3 col-search-results">
            <label htmlFor="query">Topic</label><br />
            <input 
          	 value={this.state.q}
          	 type="text" 
          	 id="query" 
          	 onChange={this._handleChangeQ}
            />
          </div>
          <div className="col col-sm-3 col-search-results">
            <label htmlFor="begin-date">Starting</label><br />
            <input 
          	 value={this.state.begin_date}
          	 type="text" 
          	 id="begin-date" 
          	 onChange={this._handleChangeB_D}
            />
          </div>{/* /col-sm-3 */}
          <div className="col col-sm-3 col-search-results">
            <label htmlFor="end-date">Ending</label><br />
            <input 
          	 value={this.state.end_date}
          	 type="text" 
          	 id="end-date" 
          	 onChange={this._handleChangeE_D}
            />
          </div>{/* /col-sm-3 */}
          <div className="col col-sm-3 col-search-results">
        	  <label></label><br />
            <button 
              type="submit" 
              className="btn btn-large btn-this" 
              id="submit-button"
            >
              Search NYT Articles 
            </button><br />
          </div>
        </form>
      </div>
    </div>
    );
  }
});

module.exports 	= Search;