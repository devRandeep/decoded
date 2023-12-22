import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Error() {
  return (
    <>
      <Container className="d-flex align-items-center justify-center"style={{height:'50vh'}}>
        <Row className='text-center'>
          <h1>Oops! Page not found. </h1>
        </Row>
      </Container>
    </>
  )
}
