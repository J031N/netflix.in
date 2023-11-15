import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [url,setUrl]=useState('')
  useEffect(() => {
    axios.get(props.url).then((res) => {

      setMovie(res.data.results)
      
    }).catch((err) => {
      alert(err)
    })
  }, )
  const opts = {
    height: '350',
    width:'100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const triler=((id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((res)=>{
  if(res.data.results.length!==0){
    setUrl(res.data.results[0]
    )}else{
      alert("triler not avilable")
    }
})
  })
  return (
    <div className='rowpost'>
      <h1>{props.title}</h1>
      <div className="posters">
        {
          movie.map((obj)=>{
              return(
                <img onClick={()=>triler(obj.id)} className={props.isSmall ?'smallPoster':"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        
              )
          })
        }
        
      </div>
       { url ? <YouTube opts={opts} videoId={url.key}  /> :""}
        
    </div>
  )
      }

export default RowPost
