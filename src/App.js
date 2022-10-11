import React ,{useEffect, useState}from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDatalayerValue } from "./Datalayer";

const Spotify = new SpotifyWebApi();



function App() {
  //useeffect run code based on given condition

 
  const [{ user ,token},dispatch] = useDatalayerValue();
 
  
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";    //for security concern
    const _token = hash.access_token;  //token inside object so wat used hash

    if(_token){
      dispatch({     //to replace the set token in usestate
        type:"SET_TOKEN",
        token:_token,
      })
      
      

      Spotify.setAccessToken(_token);

      Spotify.getMe().then(user => {   //api that enter our spotify user account
        
        dispatch({
            type:'SET_USER',
            user:user,
        })
      });

      Spotify.getUserPlaylists().then((playlists) => {
          dispatch({
              type:"SET_PLAYLISTS",
              playlists:playlists,
          });
      } ); 
      Spotify.getPlaylist('5SmzJilH2Nmk664Yp0uhBn').then(response => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      });  
    }
    console.log("I have a token >>>", token);

  }, []);
  console.log("user found",user);
  console.log("Token found",token)
  return (
    <div className="App">
      {
        token ? 
          <Player Spotify={Spotify} />      //---->spotify acts as an prop
        :
          <Login />
        
      } 
    </div>
  );
}

export default App;


