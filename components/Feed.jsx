import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from "./Contact"
import Footer from './Footer'
import { AiOutlineArrowUp } from 'react-icons/ai'
function Feed({ skills, projects }) {
    const [up, setUp] = useState(false);
    const changeUp = () => {
        if (window.scrollY >= 600) {
            setUp(true)
        } else {
            setUp(false)
        }
    }
    useEffect(() => {
        changeUp();
        window.addEventListener('scroll', changeUp)
    }, [])
    return (
        <div id="feed" className='relative text-[#1E283C] bg-white bg-no-repeat bg-cover'>
            <Home />
            <About skills={skills} />
            <Projects projects={projects} />
            <Contact />
            <Footer />
            <div
                onClick={() => {
                    document.getElementById('home').scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                className={`fixed bottom-6 ${up ? 'right-4' : 'right-[-60px]'} cursor-pointer z-20 rounded-full p-2 text-xl md:text-3xl text-[#3981F1] border-4 border-[#3981F1] bg-transparent duration-150 ease-in group overflow-hidden hover:text-white`}>
                <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                <AiOutlineArrowUp />
            </div>
        </div>
    )
}

export default Feed
