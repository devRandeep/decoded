import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {
  const TestimonialSlide = [
    {
      testimonialDesc:
        " Lorem ipsum dolor sit amet consectetur. Arcu in tincidunt pharetra tempor pharetra id a et. Tellus quis est in ut erat      neque elit augue facilisis. Penatibus dolor nullam a et faucibus posuere purus in. Nulla enim mi morbi suspendisse.Pellentesque suspendisse nunc mi non.",
        authorName:"Joe Blogg",
        deocoded:"Decoded",
    },
    {
      testimonialDesc:
        " Lorem ipsum dolor sit amet consectetur. Arcu in tincidunt pharetra tempor pharetra id a et. Tellus quis est in ut erat      neque elit augue facilisis. Penatibus dolor nullam a et faucibus posuere purus in. Nulla enim mi morbi suspendisse.Pellentesque suspendisse nunc mi non.",
        authorName:"Jon",
        deocoded:"Decoded",
    },
    

  ];

  return (
    <>
      <section className="testimonialFrame p80">
        <Container>
          <Row>
            <Col md={12} className="mx-auto">
              <Swiper navigation={true} pagination={{clickable:true}}>
                {TestimonialSlide.map((testFiled) => (
                  <SwiperSlide>
                  <p>{testFiled.testimonialDesc}</p>
                  <div className="authorName">
                    <strong>{testFiled.authorName}</strong>
                    <p>{testFiled.deocoded}</p>
                  </div>
                </SwiperSlide>
                ))}
                
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
