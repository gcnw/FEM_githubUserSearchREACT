import React from 'react';
import './App.css';
import { SearchContainer } from './SearchContainer';
import { InfoContainer } from './InfoContainer';
import { GitHubHelper } from './util/GithubHelper'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: {
        name: "The Octocat",
        avatarUri: "https://avatars.githubusercontent.com/u/583231?v=4",
        joinDate: "2008-01-14T04:33:35Z",
        username: "octocat",
        bio: "There once was...",
        repos: 2,
        followers: 20,
        following: 0,
        location: "San Francisco",
        twitter: "monatheoctocat",
        webpage: "https://github.com/blog",
        workplace: "GitHub",
      },
      mode: "light",
    }

    this.search = this.search.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(){}

  search(username){
    console.log('Search Clicked');
    GitHubHelper.search(username)
      .then(searchResults =>
        {
          this.setState({searchResults: searchResults})
        })
  }
  render() {
    return (
    <div>
        <SearchContainer modeChange={this.changeMode} onSearch={this.search}/>
        <InfoContainer searchResults={this.state.searchResults} />    
    </div>
  );
  }
}

export default App;
