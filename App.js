import React from 'react'
import Picture from './components/Picture'
import Header from './components/Header'
import Contact from './components/Contact'
import Information from './components/Information'
import Social from './components/Social'

export default function App(){
    return (
        <div className="card">
            <Picture />
            <Header />
            <Contact />
            <Information />
            <Social />
        </div>
    )
}

