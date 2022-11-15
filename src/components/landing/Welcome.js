import React from 'react'
import About from './About'
import ChooseUs from './ChooseUs'
import Contracts from './Contracts'
import Counter from './Counter'
import { Employees } from './Employees'
import Footer from './Footer'
import Slider from './Slider'
import Testimonials from './Testimonials'

const Welcome = () => {
    return (
        <>
            <Slider />
            <Counter />
            <About />
            <ChooseUs />
            <Contracts />
            <Employees />
            <Testimonials />
            <Footer/>
        </>

    )
}

export default Welcome