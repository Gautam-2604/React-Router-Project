import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Gautam-2604')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-600 text-3xl text-white text-center m-4'>Github Followers : {data.followers}
    <img src={data.avatar_url } width={300} alt="" />
    </div>
  )
}

export default Github