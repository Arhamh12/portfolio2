import React from 'react'
import Hero from "./component/Hero";
import ExpTeaser from './component/ExpTeaser';
import Projects from './component/Projects';
import Work from './component/Work';
import Contact from './component/Contact';
import './Home.css'

export default function Home(){

    return(
            <>
            <Hero />
            <ExpTeaser />
            <Projects></Projects>
            <Work></Work>
            <Contact></Contact>
            </>
    )
}