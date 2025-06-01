import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({data,reference}) => {//{data}=props.data
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative w-60 h-70 rounded-[20px] text-white p-6 py-9 bg-zinc-900/90 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-s mt-5'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className=' py-3 px-4  flex items-center justify-between mb-1'>
                    <h5>{data.filesize} </h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close?<IoMdClose/>:                        <MdOutlineFileDownload size="1.2em" color='lightgrey' />}

                    </span>

                </div>
                {
                    data.tag.isOpen ? (    <div className={`tag w-full h-10 left-0 ${data.tag.tagColor === "blue" ? "bg-blue-700":"bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                    </div>): null                }
            
            </div>
        </motion.div>
    )
}

export default Card
