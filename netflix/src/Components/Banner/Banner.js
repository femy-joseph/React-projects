import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios.js'
import { API_KEY,Image_URL} from '../../Constants/Constants.js'


function Banner(){
const min = 1;
const max = 20;
const movindex = Math.floor(Math.random() * (max - min + 1)) + min;

  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      //console.log(response.data.results[0])
      setMovie(response.data.results[movindex])
    })
  },[movindex])



  return (
    <div style={{backgroundImage: `url(${movie? Image_URL+movie.backdrop_path : ""})` }} className='banner'>
         <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade-bottom"> </div>      
    </div>
  )
}

export default Banner
