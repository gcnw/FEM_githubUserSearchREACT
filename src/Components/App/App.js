import React from 'react';
import './App.css';
import { SearchContainer } from '../SearchContainer/SearchContainer';
import { InfoContainer } from '../InfoContainer/InfoContainer';
import { GitHubHelper } from '../../util/GithubHelper'

class App extends React.Component {
  constructor(props){
    super(props);

    const userDefault = 
      window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";

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
      lightMode: userDefault,
      error: "",
    }

    this.search = this.search.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode(){
    console.log(this.state.lightMode);
    if(this.state.lightMode === "light"){
      this.setState({lightMode: "dark"})
    }
    else {
    this.setState({lightMode: "light"})
    }
  }

  search(username){
    GitHubHelper.search(username)
      .then(searchResults =>
        {
          if(searchResults === null) {
            this.setState({error: "No Results"});
          }
          else {
            this.setState(
              {searchResults: searchResults, error:""})
          }
          })
  }
  render() {
    return (
    <div className="App" data-theme={this.state.lightMode}>
      <div>
        <SearchContainer 
          error={this.state.error}
          theme={this.state.lightMode} 
          modeToggle={this.toggleMode} 
          onSearch={this.search}/>
        <InfoContainer 
          theme={this.state.lightMode} 
          searchResults={this.state.searchResults} />    
      </div>
    </div>
  );
  }
}

export default App;
