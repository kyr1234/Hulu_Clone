import React,{useState,useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from 'axios';
import request from './request.js';
import FlipMove from 'react-flip-move';

function Results({selectedoption}) {
    
  const [movies,showMovies]=useState([]);
  useEffect(()=>{
    async function fetchData(){
const requests=await axios.get(selectedoption);
   showMovies(requests.data.results);
   return requests;
    }
    fetchData();
  },[selectedoption]);
  
  
  return (

    <div className="Results">

 
    {movies.map((movie)=>(
<VideoCard key={movie.id} movie={movie}/>
))}
    
    

    </div>
  );
}

export default Results;
