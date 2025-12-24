import React from 'react'
import styles from './style'
import './App.css'

import { Navbar, Billing, CardDeal, Business, Clients, CTA, State, Footer, Testimonials, Hero, } from './components'

function App() {


  return (
    <>
      <div className="bg-black w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-black ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <State />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />

          </div>
        </div>


      </div>

    </>
  )
}

export default App
