
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './style';
import {Navbar,Hero ,Stats ,Business ,Billing ,CardDetail,Testimonials ,Clients ,CTA ,Footer } from './Components';
 


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
        <Navbar />
       </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDetail />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer  />
        </div>
      </div>

    </div>
  );
};

export default App;
