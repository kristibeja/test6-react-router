import React from 'react';
import "./GlobalSearch.css";
import { AiOutlineSearch } from 'react-icons/ai';

export default function GlobalSearch() {
  return (
    <div className='global-search-container'>
        <AiOutlineSearch />
        <input type="text" placeholder="Global Search" />
    </div>
  )
}
