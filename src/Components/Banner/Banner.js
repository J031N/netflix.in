import  { useState } from 'react'
import {useEffect} from 'react'
import { API_KEY ,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'


function Banner() {
const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results[0])
      setMovie(res.data.results[0])
  })
  }, [])
  return (
    <div style={{backgroundImage:`URL(${movie ? imageUrl+movie.backdrop_path :""})`}} className='banner'>
      
      <div className='content'>
        <h1 className='tiltle'>{movie ? movie.title :''}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h2 className='description'>{movie ? movie.overview :""}</h2>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
