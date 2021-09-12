import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Playcircle from '@material-ui/icons/PlayCircleOutline';

function Header() {
  return (
    <div className="Header">
     
     <div className='container_one'>
    
      <div className='logo logo--active'>
           <HomeIcon/>
           <p>HOME</p>
       </div>
        
        <div className='logo'>
              <FlashOnIcon/>
              <p>FLASH</p>
       </div>
      
          <div className='logo'>
               <Playcircle/>
              <p>Playlist</p>
          </div>
           <div className='logo'>
               <VideoLibraryIcon/>
              <p>Library</p>
          </div>
          
          <div className='logo'>
               <SearchIcon/>
              <p>SEARCH</p>
          </div>   
      </div>
             
   
       <img  alt='imagetag' src='https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg' className='hulu_logo' />
 
       
       

    </div>
  );
}

export default Header;
