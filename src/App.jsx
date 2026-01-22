import { useEffect, useState } from 'react'

import './App.css'

function Cards() {
     
  let [Profiles,setProfiles] = useState([]);
  let [NumberOfProfiles,setNumberOfProfiles] = useState("");

    async function genetateProfiles(count){
      try {
        
      
       let ran = Math.floor( 1 + Math.random() * 10000 )
        const pro = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data =await pro.json();
         setProfiles(data);
        }
        
         catch (error) {
        console.log(error)
      }
       

       
    }

    useEffect(()=>{
      genetateProfiles(10);
    },[])

  return (
    <>
    <input type="text" className='inpu' placeholder='Enter number' value={NumberOfProfiles} onChange={(e)=>setNumberOfProfiles(e.target.value)}/>
    <button onClick={()=>{genetateProfiles(Number(NumberOfProfiles))}} >click</button>
    <div className='collection'>
      {
        Profiles.map( (value)=>{
          return (
            <div className='card' key={value.id}>
              <img className='image' src={value.avatar_url} alt="" />
              <h2 className='log'>{value.login}</h2>
              <a href={value.url} target='blank'>click</a>
            </div>
          )
        }
        )
      }
      </div>
    </>
  )
}

export default Cards
//https://api.github.com/users?since=6000per_page=20
//'https://api.github.com/users?per_page=10'