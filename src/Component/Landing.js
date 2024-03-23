import React from 'react'

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-40 px-20 '>
            {["We Create","Eye Opening","Presentations"].map((elem,index)=>{
                return <div className='masker ' key={index}>
                <h1 className='uppercase font-medium  leading-[6vw] tracking-tighter text-[7.5vw] font-["Founders_Grotesk"]'>{elem}</h1>
            </div>
            })}
            
            

        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the firts pitch to IPO"].map((elem,index)=>
            <p key={index} className='text-md font-light tracking-tight leading-none'>{elem}</p>)}
            <div className='start'>
            <div className='px-5 capitalize py-2 text-sm font-light border-[2px] border-zinc-500 rounded-full'> start the project</div>
            </div>
        </div>
    </div>
  )
}

export default Landing