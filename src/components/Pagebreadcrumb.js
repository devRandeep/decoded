import React from 'react'
import PageBreadcurmbImage from '../images/makesdifference.png';

export default function Pagebreadcrumb() {
  return (
    <>
        <section className='breadCrumb' style={{backgroundImage:`url(${PageBreadcurmbImage})` ,}}>
            <h2>About Us</h2>
        </section>
    </>
  )
}
