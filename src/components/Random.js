import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

  const {gif,loading,fetchData}=useGif()

  function clickhandler() {
    fetchData();
  }

  return (
    <div className='flex flex-col items-center w-3/6 bg-green-500 rounded-lg '>

      <h1 className='font-bold text-2xl underline m-3'>
        A Random Gif
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width='450' alt='gif' />)
      }

      <button className='bg-yellow-500 p-2 w-4/6 rounded-lg m-2 font-bold text-2xl '
        onClick={clickhandler}
      >
        GENERATE
      </button>
    </div>
  )
}

export default Random