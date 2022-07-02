import locationIcon from './res/icon-location.svg'
import companyIcon from './res/icon-company.svg'
import twitterIcon from './res/icon-twitter.svg'
import websiteIcon from './res/icon-website.svg'
import React from 'react'

export class InfoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.formatDate = this.formatDate.bind(this);
    }
    formatDate(){
        const currentDate = new Date(this.props.searchResults.joinDate);
        const options = {day:'numeric', month:'short', year:'numeric'}
        return currentDate.toLocaleDateString('en-GB',options);
    }
    render(){
        return (
            <div className="info-container">
                <div>
                    <img id="user-image" src={this.props.searchResults.avatarUri} alt={`${this.props.searchResults.username}'s avatar'`} />
                </div>
                <div className="user-data">
                <span>
                    <h1 id="userName">{this.props.searchResults.name}</h1>
                    <p id="joinDate">{this.formatDate()}</p>
                </span>
                <p id="unique-handle">@{this.props.searchResults.username}</p>
                <p id="user-bio">{this.props.searchResults.bio}</p>
                <div className="stat-container">
                    <span>Repos<br /><h1>{this.props.searchResults.repos}</h1></span>
                    <span>Followers<br /><h1>{this.props.searchResults.followers}</h1></span>
                    <span>Following<br /><h1>{this.props.searchResults.following}</h1></span>
                </div>
                <div className="contact-container">
                    <span>
                    <img src={ locationIcon } alt="location icon" /><p>{this.props.searchResults.location}</p>
                    </span>
                    <span>
                    <img src={ twitterIcon } alt="twitter icon" /><p>{this.props.searchResults.twitter}</p>
                    </span>
                    <span>
                    <img src={ websiteIcon } alt="homepage icon" /><p>{this.props.searchResults.webpage}</p>
                    </span>
                    <span>
                    <img src={ companyIcon } alt="workplace icon" /><p>{this.props.searchResults.workplace}</p>
                    </span>
                </div>
                </div>
            </div>
)}}