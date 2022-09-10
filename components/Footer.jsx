import Image from 'next/image'
import React from 'react'
import Fateh from "../assets/images/logo.png"

function Footer() {
    return (
        <div className='w-full bg-[#1E283C] flex  text-white py-5 flex-col items-center'>
            <div className='w-16 h-16'>
                <Image src={Fateh} alt="bhd" />
            </div>
            <p>By Mohamed El Fateh in 2022</p>
        </div>
    )
}

export default Footer
