import { useState } from "react";
import { useEffect } from "react";
import "./Weather.css"
import { FaCloudSun } from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";
import { IoRainy } from "react-icons/io5";
import { BsCloudHazeFill } from "react-icons/bs";

export let SearchData = (props) => {
  let { inp } = props;
  let [data,setData] = useState();
  useEffect( ()=>{
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${import.meta.env.VITE_API_KEY}`)
    .then((res)=>res.json()).then((res)=>setData(res)).catch((err)=>console.log('API',err))
    
  },[inp])
  if(data){
    function cld(){
      let clouds =data.weather[0].main;
      if(clouds==="Clouds"){
        return  <FaCloudSun />
      }else if(clouds==="Mist"){
        return <RiMistFill />
      }else if(clouds==="Rain"){
        return <IoRainy />
      }else if(clouds==='Haze'){
        return <BsCloudHazeFill />
      }
    }
     return(
         <div className="box">
              <div className="icon">{cld()}</div>
             <h1>{Math.floor(data.main.temp-273)}<span>°C</span></h1>
             <h3>{data.name}, <span>{data.sys.country}</span></h3>
             <h3>wind:{data.wind.speed} Km/h</h3>
             </div>
     ) 
 }
  
};
