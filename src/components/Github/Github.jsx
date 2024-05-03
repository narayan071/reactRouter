import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
  return (
    <div className='text-center bg-gray-700 flex'>
        <div className="w-1/2 text-center text-white my-auto">
            <h1>Github UserName: {data.login}</h1>
            <h1>Name: {data.name}</h1>
            <h1>Followers : {data.followers}</h1>
        </div>
        <div className="w-1/2">
            <img src={data.avatar_url} className='rounded-full shadow-2xl p-3' alt="avatar" />
        </div>
    </div>
  )
}

export default Github

export const dataLoader = async() =>{
    const response = await fetch("https://api.github.com/users/narayan071")
    return response.json();
}
