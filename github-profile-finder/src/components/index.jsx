import {useState, useEffect} from 'react'

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
        }
        console.log(data)
       
    }
    function handleSubmit() {
        
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