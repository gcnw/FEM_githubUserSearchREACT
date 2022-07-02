import React from 'react'
import searchIcon from './res/icon-search.svg' 

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
        console.log(event.target.value);
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
            <div className="search-bar">
                <img src={ searchIcon } alt="magnifying glass" height="24" width="24" />
                <input 
                    value={this.state.searchTerm} 
                    onChange={this.handleTermChange}
                    onClick={this.handleTermChange}
                    />
                <button 
                    onClick={this.search}>Search!</button>
            </div>
        )
    }
}