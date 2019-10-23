import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const initProfile = {
  followers: null,
  publicRepos: null
}

function App(){

  const [profile, setProfile] = useState(initProfile);

    async function getProfile(){
      const response = await fetch('https://api.github.com/users/doujones')
      const json = await response.json();

      setProfile({
        followers: json.followers,
        publicRepos: json.public_repos
      })
    }
      useEffect(() => {
        getProfile();
      }, [])
    return(
      <div className="App">
      <header className="App-header">
      <h2>Fetch Data</h2>
      <h3>{`follower: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
      </header>
      </div>
    )
}

export default App