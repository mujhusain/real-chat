import React from "react"

const Search = (props) => {
  return (
    <div className="search">
        <div className="searchForm">
        <input type="text" placeholder="Search Name" />
        </div>
        <div className="userChat">
            <img src="https://th.bing.com/th/id/OIP.F2XOBhKXhiDs8Fv-Tde6YgHaIJ?w=196&h=216&c=7&r=0&o=5&dpr=2&pid=1.7" alt="" />
            <div className="userChatInfo">
                <span>Kim Min</span>
            </div>
        </div>
    </div>
  )
};

export default Search;
