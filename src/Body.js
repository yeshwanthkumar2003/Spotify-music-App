import React from 'react';
import './Body.css';
import { useDatalayerValue } from './Datalayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './Songrow';

function Body({spotify}) {
  const[{discover_weekly},dispatch] = useDatalayerValue();
  return (
    <div className='body'>
      <Header spotify = {spotify}/>
      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt='' />

        <div className='body_infotext'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          
        </div>
        </div>
        <div className='body_songs'>
          <div className='body_icons'>
          <PlayCircleFilledIcon className='body_shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
          </div>
          {/*list of songs */}
          {discover_weekly?.tracks.items.map(item =>(
            <SongRow track = {item.track} />
          ))}
        </div>
      </div>
    
  )
}

export default Body
