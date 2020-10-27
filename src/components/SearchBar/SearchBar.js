import React from "react";

class SearchBar extends React.Component {
  state = { userName: "" };

  onInputChange = async (event) => {
    await this.setState({ userName: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.userName);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field ui grid">
            <div className="ui row">
              <label className="two wide column">
                <i className="huge github alternate icon"></i>
              </label>
              <div className="twelve wide column">
                <div className="ui icon huge input">
                  <input
                    type="text"
                    placeholder="Search"
                    value={this.state.userName}
                    onChange={this.onInputChange}
                  />
                  <i className="circular search link icon"></i>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
