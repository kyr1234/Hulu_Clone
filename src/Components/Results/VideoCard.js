import React,{forwardRef} from 'react';
import './VideoCard.css';
import Truncate from "react-text-truncate";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



const base_url="https://image.tmdb.org/t/p/w500/";



function VideoCard=forwardRef(({movie},ref)=>{
  return (
    <div className="VideoCard">
   <img src={`${base_url}${movie.poster_path||movie.backdrop_path}`} className='images' alt='imagetags'/>
        
       <Truncate
       line={1}
       element="p"
       truncateText="..."
       text={movie.overview}
       />
       <h3>{movie.title ||movie.original_name}</h3>
       <p className='desc'>
       {movie.release_date ||movie.first_air_date}
       {movie.vote_count}
       <ThumbUpIcon/>
       </p>
    </div>
  );
});

export default VideoCard;
