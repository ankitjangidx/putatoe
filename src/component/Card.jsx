import React from 'react'

function Card( {source, text}) {
  return (
    <div className="bg-white min-w-[8.5rem] rounded-xl m-5 cursor-pointer ">
      <img src={source} alt="" className='rounded-md p-4' />
      <h3 className='text-xl text-center pb-4'>{text}</h3>
    </div>
  );
}

export default Card