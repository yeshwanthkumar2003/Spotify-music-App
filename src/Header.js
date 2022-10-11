import React from 'react';
import"./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import { useDatalayerValue } from './Datalayer';

function Header() {
    const[{user},dispatch] = useDatalayerValue();
  return (
    <div className='header'>
      <div className='header_left'>
      <SearchIcon />
      <input
      placeholder='Search for Artists and songs'
      type="text"     
      />
      </div>
      <div className='header_right'>
      <Avatar src={user?.images[0]?.url} alt='YK' />
      <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
