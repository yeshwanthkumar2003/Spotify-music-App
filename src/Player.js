import React from 'react'
import './Player.css'
import Sidebar from './sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
  return (
    <div className='player'>
      <div className='player_body'>
        {/*Sidebar */}
        <Sidebar />
        {/*body*/}
        <Body spotify={spotify} />
      </div>
      
      {/*Footer */}
      <Footer />

    </div>
  );
}

export default Player
