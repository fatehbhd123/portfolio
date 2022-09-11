import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from "./Contact"
import Footer from './Footer'
function Feed({ skills, projects }) {
    return (
        <div id="feed" className='text-[#1E283C]  bg-cover bg-no-repeat bg-center '>
            <Home />
            <About skills={skills} />
            <Projects projects={projects} />
            <Contact />
            <Footer />
        </div>
    )
}

export default Feed
