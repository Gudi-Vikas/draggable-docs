"use client"
import React, { useRef, useState } from 'react'
import Card from './Card'
import { motion } from "motion/react"


const Foreground = () => {
    const constraintRef = useRef(0)
    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "upload now", tagColor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },

    ]
    return (
        <div ref={constraintRef} className='fixed top-0 px-5 py-20 left-0 w-full z-[3] h-screen flex gap-15 flex-wrap '>

            {
                data.map((item, index) => {
                   return <Card data={item} reference = {constraintRef}/>
                })

            }
        </div>

    )
}

export default Foreground
