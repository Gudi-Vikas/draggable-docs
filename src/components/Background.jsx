import React from 'react'

const Background = () => {
    return (
        <>
            <div className='w-full h-screen fixed z-[2]'>{/*if z index is high it will be on top*/}
            <div className=' w-full flex justify-center font-semibold text-xl text-zinc-300 py-5'>Documents. </div>
            <h1 className='text-[13vw] absolute top-1/2 left-1/2 font-semibold text-zinc-600 -translate-x-[50%] -translate-y-[50%]  leading-0 tracking-tight'>Docs.</h1>
            </div>
        </>
    )
}

export default Background
