
import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'


const Tag = () => {

  const [tag , settag] = useState('car')
  const {gif,loading,fetchData} = useGif(tag)

  function clickhandler() {
    fetchData();
  }

  return (
    <div className='flex flex-col items-center w-3/6 bg-green-500 rounded-lg m-10 '>

      <h1 className='font-bold text-2xl underline m-3'>
        Random {tag}  Gif
      </h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width='450' alt='gif' />)
      }

      <input
        className='p-1 w-4/6 rounded-lg m-2 text-2xl text-center'
        onChange={(event) => settag(event.target.value)}
        value={tag}
      />

      <button className='bg-yellow-500 p-2 w-4/6 rounded-lg m-2 font-bold text-2xl '
        onClick={clickhandler}>
        GENERATE
      </button>
    </div>
  )
}

export default Tag