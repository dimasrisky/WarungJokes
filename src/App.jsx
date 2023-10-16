import React, { useEffect, useState } from 'react'
import emoji from "/emoji.svg"

const App = () => {
  const[ joke, setJoke ] = useState()
  const getJoke = () => {
    fetch('https://candaan-api.vercel.app/api/text/random')
      .then(res => res.json())
      .then(dataJoke => setJoke(dataJoke.data))
  }
  useEffect(() => getJoke(), [])
  return (
    <main className='w-[100vw] h-[100vh] bg-[#E9B824] flex flex-col justify-center items-center'>
      <div className=' top-[3rem] sm:top-[2rem] text-center font-bold font-pixely flex flex-col mb-[2rem]'>
        <span className='text-[2.4rem] sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.2rem] -mb-[1rem]'>Selamat Datang</span>
        <span className='text-[1.4rem]'>Di WarungJokes 👋</span>
        <p className=" font-inter top-[9rem] font-thin text-center text-xs italic max-w-[25rem] mt-[0.5rem]">Random Jokes Generator yang isinya Jokes-Jokes Receh yang biasa dipake bapak bapak, selamat mencoba 👍</p>
      </div>
      <div className='w-[80vw] sm:w-[60vw] md:w-[55vw] lg:w-[50vw] xl:w-[40vw] bg-[#272829] flex flex-col items-center gap-7 p-6 sm:p-[2rem] text-white font-inter'>
        <img src={emoji} alt="emoji" className='w-[4rem]' />
        <p className='text-sm sm:text-sm md:text-base text-center'>{joke}</p>
        <button onClick={getJoke} className='text-xs bg-[#c89c18] px-[1.5rem] sm:px-[2rem] md:px-[2.5rem] lg:px-[3rem] xl:px-[3.5rem] py-[0.5rem] rounded-md hover:bg-[#E9B824]'>Get Jokes</button>
      </div>
    </main>
  ) 
}

export default App