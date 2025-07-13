import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import About from '../components/About'
import Solutions from '../components/Solutions'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 