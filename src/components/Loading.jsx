import React from 'react'
import loading from  './loading.gif'

const Loading = () => {
  return (
    <div className='my-3'>
        <img className='my-10 text-center 'src={loading} alt="loading img" />
    </div>
  )
}

export default Loading