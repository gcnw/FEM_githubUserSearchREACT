import React from 'react'
import searchIcon from './icon-search.svg' 
import './SearchBar.css'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "Search GitHub username...",
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(event) {
        const message = event.target.value;
        if(message === "Search GitHub username..."){
            this.setState(
                {searchTerm: ""}
            )
        }        
        else {
        this.setState(
            {searchTerm:message}
        )
        }
    }

    render() {
        return(
            <div className="search-bar" >
                <img src={ searchIcon } alt="magnifying glass" height="24" width="24" />
                <input onKeyPress={(event) => {
                    if(event.key === "Enter"){
                        this.search();
                    }
                }}
                    value={this.state.searchTerm} 
                    onChange={this.handleTermChange}
                    onClick={this.handleTermChange}
                />
                <p id="error-message">{this.props.error}</p>
                <button 
                    onClick={this.search}>Search</button>
            </div>
        )
    }
}