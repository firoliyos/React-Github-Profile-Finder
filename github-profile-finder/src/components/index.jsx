import {useState, useEffect} from 'react'

export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('firoliyos')
    async function fetchGithubUserData() {
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()

        console.log(data)
    }
    function handleSubmit() {
        
    }

    useEffect(()=> {
      fetchGithubUserData()
    }, [])
    return (
        <div className="input-wrapper">
          <input 
          name="search-by-userName"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event)=> setUserName(event.target.value)}
          />  
          <button onClick={handleSubmit}>Search</button>
        </div>
    )
}