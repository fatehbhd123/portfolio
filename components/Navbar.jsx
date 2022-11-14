import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '/public/logo.png'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from 'react-icons/ai'
function Navbar() {

    const links = [
        'Home', 'About', 'Skills', 'Projects'
    ]
    const Link = ({ text, i }) => {
        return (
            <li
                className="flex items-center cursor-pointer duration-150 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => {
                    document.getElementById(text.toLowerCase()).scrollIntoView({
                        behavior: 'smooth'
                    })
                    setOpen(false)
                }}>
                <span className='text-blue-500'>0{i + 1}.</span> {text}
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
        <nav className={`bg-[#1D1D1D] ${black ? 'md:shadow-2xl md:bg-[#1D1D1D] ' : "md:bg-transparent"}   fixed w-full z-20 top-0 left-0 duration-150`}>
            <div className="px-10 md:px-10 py-2.5 relative h-full md:static  flex flex-wrap justify-between items-center mx-auto">
                <div className='h-12 md:h-14 flex items-center w-14 md:w-18 cursor-pointer z-30'>
                    <Image src={logo} alt='' />
                </div>
                <div className="flex md:order-2">
                    <button
                        onClick={() => {
                            document.getElementById('contact').scrollIntoView({
                                behavior: 'smooth'
                            })
                            setOpen(false)
                        }}
                        type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Contact</button>
                    <button
                        onClick={() => setOpen((e) => !e)}
                        data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={`${open ? 'top-full' : 'bottom-full'} bg-[#1D1D1D] md:bg-inherit  absolute left-0 md:static z-10 md:z-20 duration-150 justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex w-full flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  ">
                        {links.map((e, i) => <Link key={i} text={e} i={i} />)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
