

export default function GithubProfileFinder() {
    return (
        <div className="input-wrapper">
          <input 
          name="search-by-userName"
          type="text"
          placeholder="Search Github Username..."
          />  
          <button>Search</button>
        </div>
    )
}