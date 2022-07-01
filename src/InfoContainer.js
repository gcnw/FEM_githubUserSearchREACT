import locationIcon from './res/icon-location.svg'
import companyIcon from './res/icon-company.svg'
import twitterIcon from './res/icon-twitter.svg'
import websiteIcon from './res/icon-website.svg'

export default function InfoContainer(props) {
    return (
    <div className="infoContainer">
        <div id="userImage"></div>
        <div className="userData">
        <span><h1 id="userName">Username</h1><p id="joinDate">Join Date</p></span>
        <p id="uniqueHandle">@handle</p>
        <p id="userBio">Bio goes here</p>
        <div className="statContainer">
            <span id="userRepos">Repos<br /><h1>NaN</h1></span>
            <span id="userFollowers">Followers<br /><h1>NaN</h1></span>
            <span id="usersFollowing">Following<br /><h1>NaN</h1></span>
        </div>
        <div className="contactContainer">
            <span id="userLocation">
            <img src={ locationIcon } alt="location icon" /><p>User Location</p>
            </span>
            <span id="twitterLink">
            <img src={ twitterIcon } alt="twitter icon" /><p>User Twitter</p>
            </span>
            <span id="webLink">
            <img src={ websiteIcon } alt="homepage icon" /><p>User Homepage</p>
            </span>
            <span id="userWorkplace">
            <img src={ companyIcon } alt="workplace icon" /><p>User Workplace</p>
            </span>
        </div>
        </div>
    </div>
)
}