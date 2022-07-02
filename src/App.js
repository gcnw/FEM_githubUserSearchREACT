import React from 'react';
import './App.css';
import SearchContainer from './SearchContainer';
import { InfoContainer } from './InfoContainer';
import { GitHubHelper } from './util/GithubHelper'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: {
        username: "octocat",
        avatarUri: "https://github.com/images/error/octocat_happy.gif",
        joinDate: "2008-01-14T04:33:35Z",
        email: "octocat@github.com",
        bio: "There once was...",
        repos: 2,
        followers: 20,
        following: 0,
        location: "San Francisco",
        twitter: "monatheoctocat",
        webpage: "https://github.com/blog",
        workplace: "GitHub",
      },
    }

    this.search = this.search.bind(this);
  }

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
        <SearchContainer onSearch={this.search}/>
        <InfoContainer searchResults={this.state.searchResults} />    
    </div>
  );
  }
}

export default App;
