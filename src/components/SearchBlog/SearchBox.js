import { Box, Input, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, graphql } from "gatsby";
import "../SearchBlog/SearchBox.scss";

export default function SearchBox({data}) {

  const [filteredList, setFilteredList] = new useState(data?.allStrapiBlog?.nodes);
 let updatedList = '';
  const filterBySearch = (event) => {
    const query = event.target.value;
    if(query){
   
      updatedList = data?.allStrapiBlog?.nodes.filter((item) => {
        return item.Title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }
    else{
      updatedList = data?.allStrapiBlog?.nodes
    }
    setFilteredList(updatedList);
  };
    
  return (
    <Box>
      <Box className="searchField">
        <Input
          id="search-box"
          onChange={filterBySearch}
          className="searchInput"
          placeholder="Search Topics"
          margin="normal"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>
      <Box className="popularBlog">
        <Typography variant="h1">Most Popular</Typography>
      </Box>
      <Box className="filterContent">
        {filteredList.map((item, index) => (
          <Box>
           <Link to={`/blog/${item?.Slug}`}>
            <Typography variant="h1" key={index}>
              {item.Title}
            </Typography>
            </Link>
            <Typography variant="span">
              By Admin InvoCom - 5 min read
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}