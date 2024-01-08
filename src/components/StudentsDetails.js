import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

export default function StudentsDetails() {
  return (
    <section className="Username p80">
    <Container>
      <Row>
        <h2 className='mb-3'>Courses</h2>
        <Col md={4}>
            <div className="courseBox">
              <div className="bookimg"><img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81FmJsPrhdL._AC_UF1000,1000_QL80_.jpg" alt="" /></div>
              <div className="bookName"><h5>General English four-skills course for adults</h5></div>
              <button className='btnSite'>Add To Cart - $10 </button>
            </div>
          </Col>    
      </Row> 
    </Container>
  </section>
  )
}

