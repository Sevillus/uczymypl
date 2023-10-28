import React from 'react'
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StudentsSearchBar = ({search, setSearch}) => {
    return (
        <TextField
            id="input-with-icon-textfield"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            variant="standard"
        />
    )
}
export default StudentsSearchBar
