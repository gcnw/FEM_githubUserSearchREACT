import moonIcon from './res/icon-moon.svg'
import searchIcon from './res/icon-search.svg' 
import sunIcon from './res/icon-sun.svg'

export default function SearchContainer(props){
  return (
    <div>
      <div className="nav-container">
        <h1>devfinder</h1>
        <p>DARK
        <img id="moon-icon" src={ moonIcon } alt="moon icon to select dark mode" height="20" width="20"/>
        </p>
    </div>
    <div className="search-container">
        <img src={ searchIcon } alt="magnifying glass" height="24" width="24"/>
        <form>
        <label for="username">Search GitHub username...</label>
        <input type="text" id="username" name="username" />
        </form>
        <button id="search-button">Search</button>
    </div>
      </div>
  )
}