import User from './user'
import {useState, useEffect} from 'react'
import './styles.css'
export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('firoliyos')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()

        if(data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
    }
    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(()=> {
      fetchGithubUserData()
    }, [])

    if(loading) {
        return (
            <h1>LOADING...</h1>
        )
    }
    return (
        <div className="github-profile-container">
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
          {
            userData !== null ? <User user={userData}/>: null
          }
        </div>
        
    )
}