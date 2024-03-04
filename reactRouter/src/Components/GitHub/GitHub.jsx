import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data,setData] = useState([]);
    useEffect (()=>{
        fetch('https://api.github.com/users/prince-chaurasiya').then((res)=>res.json())
        .then(data =>{
            setData(data)
        })
    },[])
  return (
    
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl flex ...'>
    <img src={data.avatar_url} alt="Git Picture" width="300" />

    <div className='flex-1'> <h2 className='bg-orange-700 m-1 p-1'>Data from GitHub API</h2> <br></br>
    <br></br>
    GitHub Profile Name : {data.name} <br></br>
    Location : {data.location}<br></br>
    Email : {data.blog} <br></br>
      <a href="https://github.com/prince-chaurasiya" target="_blank" rel="noopener noreferrer">
        <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
        font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">GitHub</button>
      </a>
    </div>
    </div>
    
  )
}

export default GitHub