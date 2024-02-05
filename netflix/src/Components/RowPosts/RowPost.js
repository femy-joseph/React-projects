import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios.js'
import { API_KEY, Image_URL } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] =  useState([])
  const [ytID,setYtID] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network error")
    })
  },[props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data)
          if(response.data.results.length!==0){
            setYtID(response.data.results[0])
          }else{
            console.log("Trailer not available !")
          }
        }).catch((error) => {
      // Handle the error here
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Server Error:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error during request setup:', error.message);
      }
    })
    // axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //   console.log(response.data)
    //   if(response.data.results.length!==0){
    //     setYtID(response.data.results[0])
    //   }else if(response.status===404){
    //     console.log("Trailer not available :404!")
    //   }else{
    //     console.log("Trailer not available !")
    //   }
      

    // })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className= {props.isSmall ? 'smallPoster' : 'poster'} src={`${Image_URL+obj.backdrop_path}`} alt='poster' />

        )}
       
      </div> 

     
       { ytID && <YouTube opts={opts} videoId={ytID.key}/>}
     
    </div>
  )
}

export default RowPost
