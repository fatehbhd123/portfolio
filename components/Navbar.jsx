import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import { motion } from 'framer-motion'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from 'react-icons/ai'
function Navbar() {

    const links = [
        'Home', 'About', 'Skills', 'Projects'
    ]
    const Link = ({ text, i }) => {
        return (
            <li
                className='hover:text-blue-500 transform hover:scale-105 text-white cursor-pointer text-sm sm:text-base duration-200 ml-3 md:ml-8 md:my-0 my-5 ease-in'
                onClick={() => {
                    document.getElementById(text.toLowerCase()).scrollIntoView({
                        behavior: 'smooth'
                    })
                    setOpen(false)
                }}>
                <span className='text-blue-500'>0{i + 1}.</span>{text}
            </li>
        )
    }
    const [black, setBlack] = useState(false);
    const changeCol = () => {
        if (window.scrollY >= 60) {
            setBlack(true)

        } else {
            setBlack(false)
        }
    }
    useEffect(() => {
        changeCol();
        window.addEventListener('scroll', changeCol)
    })

    let [open, setOpen] = useState(false);
    return (
        <motion.nav
            initial={{
                y: -70,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{ type: 'spring', duration: .6 }}
            className={`w-full shadow-none bg-[#1D1D1D]  ${black ? 'md:shadow-2xl md:bg-[#1D1D1D] ' : "md:bg-transparent"} fixed top-0 left-0 text-white duration-200 z-10`}>
            <div className={`md:flex  items-center justify-between px-7 md:px-10 py-3 z-30 relative`}>
                <div className='h-12 md:h-14 flex items-center w-14 md:w-18 cursor-pointer z-30'>
                    <Image src={logo} alt='' />
                </div>
                <div className='z-30' >
                    {!open ? <FaBars onClick={() => setOpen(true)} className={`absolute ${open ? 'scale-0' : 'scale-100'}  right-8 top-6 cursor-pointer md:hidden duration-200`} /> : <AiOutlineClose onClick={() => setOpen(false)} className={`${open ? 'scale-100' : 'scale-0'} duration-200  h-10 absolute right-8 top-6 cursor-pointer md:hidden`} />}
                </div>
                <ul className={`md:flex md:items-center z-[-1] md:z-[20] md:pb-0 pb-12 absolute md:static top-full w-full md:w-auto md:pl-0 pl-9 ease-in  duration-300 ${open ? 'left-0' : 'left-[-100%]'} bg-[#1D1D1D]  md:bg-inherit`}>
                    {links.map((e, i) => <Link key={i} text={e} i={i} />)}
                    <div onClick={() => {
                        document.getElementById('contact').scrollIntoView({
                            behavior: 'smooth'
                        })
                        setOpen(false)
                    }} className='relative text-xl sm:text-base border-4 w-fit border-[#3981F1] rounded-md text-[#3981F1] group hover:text-white cursor-pointer duration-200  py-2 px-5 md:ml-4   '>
                        <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                        contact
                    </div>
                </ul>
            </div>
        </motion.nav>

    )
}

export default Navbar
