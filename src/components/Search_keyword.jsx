const Search_keyword = () => {
  return (
    <div className="search-keyword-container">
      <form className="search-keyword-form">
        <input type="search" className="search-keyword-box" placeholder="Search Keyword" />
        <i className="ri-search-line" style={{fontSize: "24px", cursor: "pointer"}}></i>
      </form>
    </div>
  )
}

export default Search_keyword