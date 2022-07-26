export default function Search(){
    return (
        <div className="row">
        <div className="col-lg-12">
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">
                Search <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
        
    )
}