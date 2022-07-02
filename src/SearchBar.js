import React from 'react'
import searchIcon from './res/icon-search.svg' 

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "Search GitHub username...",
        }
    }

    render() {
        return(
            <div className="search-bar">
            <img src={ searchIcon } alt="magnifying glass" height="24" width="24"/>
            <form>
            <label for="username"></label>
            <input 
                id="username" 
                name="username"
                value={this.state.searchTerm} />
            </form>
            <button id="search-button">Search</button>
        </div>
        )
    }
}