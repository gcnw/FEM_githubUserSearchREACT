import moonIcon from './res/icon-moon.svg'
import sunIcon from './res/icon-sun.svg'
import { SearchBar } from './SearchBar'

export default function SearchContainer(props){
  return (
    <div>
      <div className="nav-container">
        <h1>devfinder</h1>
        <p>DARK
        <img id="moon-icon" src={ moonIcon } alt="moon icon to select dark mode" height="20" width="20"/>
        </p>
    </div>
    <SearchBar />
      </div>
  )
}