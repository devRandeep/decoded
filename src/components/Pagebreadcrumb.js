import React from 'react'
import PageBreadcurmbImage from './images/breadcrumbimage.jpg';

export default function Pagebreadcrumb() {  
  return (
    <>
        <section className='breadCrumb' style={{backgroundImage:`url(${PageBreadcurmbImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
            <h2>About Us</h2>
        </section>
    </>
  )
}
