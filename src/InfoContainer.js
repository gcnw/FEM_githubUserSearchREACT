import locationIcon from './res/icon-location.svg'
import companyIcon from './res/icon-company.svg'
import twitterIcon from './res/icon-twitter.svg'
import websiteIcon from './res/icon-website.svg'
import React from 'react'

export class InfoContainer extends React.Component {
    render(){
        return (
            <div className="infoContainer">
                <div id="userImage">
                    <img src={this.props.searchResults.avaterUri} alt={`${this.props.searchResults.username}'s avatar'`} />
                </div>
                <div className="userData">
                <span>
                    <h1 id="userName">{this.props.searchResults.username}</h1>
                    <p id="joinDate">{this.props.searchResults.joinDate}</p>
                </span>
                <p id="uniqueHandle">{this.props.searchResults.email}</p>
                <p id="userBio">{this.props.searchResults.bio}</p>
                <div className="statContainer">
                    <span id="userRepos">Repos<br /><h1>{this.props.searchResults.repos}</h1></span>
                    <span id="userFollowers">Followers<br /><h1>{this.props.searchResults.followers}</h1></span>
                    <span id="usersFollowing">Following<br /><h1>{this.props.searchResults.following}</h1></span>
                </div>
                <div className="contactContainer">
                    <span id="userLocation">
                    <img src={ locationIcon } alt="location icon" /><p>{this.props.searchResults.location}</p>
                    </span>
                    <span id="twitterLink">
                    <img src={ twitterIcon } alt="twitter icon" /><p>{this.props.searchResults.twitter}</p>
                    </span>
                    <span id="webLink">
                    <img src={ websiteIcon } alt="homepage icon" /><p>{this.props.searchResults.webpage}</p>
                    </span>
                    <span id="userWorkplace">
                    <img src={ companyIcon } alt="workplace icon" /><p>{this.props.searchResults.workplace}</p>
                    </span>
                </div>
                </div>
            </div>
)}}