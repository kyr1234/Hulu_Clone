import React from 'react';
import './navbar.css';
import request from '../request';

function navbar({setselectedoption}) {
  return (
    <div className="navbar">
     <ul className='navlist'>
     <li onClick={()=>setselectedoption(request.fetchtrending)}>TRENDING</li>
     <li>ACTION</li>
     <li>BOLLYWOOD</li>
     <li>HOLLYWOOD</li>
      <li onClick={()=>setselectedoption(request.fetchHorrorMovies)}>HORROR</li>
       <li>MYSTERY</li>
        <li onClick={()=>setselectedoption(request.fetchSciFi)}>SCI-FI</li>
         <li onClick={()=>setselectedoption(request.fetchRomance)}>ROMANCE</li>
      <li>ADVENTURE</li>
         <li onClick={()=>setselectedoption(request.fetchAnimation)}>ANIMATION</li>
      <li onClick={()=>setselectedoption(request.fetchTV)}>T.V MOVIE</li>
     </ul>
        
       
       

    </div>
  );
}

export default navbar;
