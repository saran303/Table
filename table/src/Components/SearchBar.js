import { borderRadius } from '@mui/system';
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar({ searchTerm, setSearchTerm }) {
    const inputStyle = {
        width : "250px",
        height: "25px",
        border: "0px",
        borderRadius: "10px"
    }
  return (
    <div>
        <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
        />
        <SearchOutlinedIcon fontSize="medium"  color="action"/>
    </div>
  );
}

export default SearchBar;
