import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDatalayerValue } from './Datalayer';

function Sidebar() {
  //pull data from spotify playlists
  const[{playlists} ,dispatch] = useDatalayerValue();
  return (
    <div className="sidebar">
      <img  className="sidebar_logo" src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg' alt='' />
      <SidebarOption Icon={HomeIcon}  title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    


    </div>
  )
}

export default Sidebar
