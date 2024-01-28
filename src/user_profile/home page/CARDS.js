import React from "react";
import { Link } from 'react-router-dom';
import "./CARDS.css";
import Lawyer from './lawyer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function CARDS() {
  const info = [
    { img: "/images/5bfb6f_1cafad56984b4997bd73792b008c6fc3.webp", name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 4 },
    { img: "/images/5bfb6f_60ff20475dbc447f92c81fdcc6a6a7c1.webp", name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 5 },
    { img: "/images/5bfb6f_5577b01919214f47ad5236247965ec04.webp", name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 3 },
    { img: "/images/5bfb6f_5577b01919214f47ad5236247965ec04.webp", name: "khaled kerha", spec: "family", phone: "123-456-7890", mail: "kerha@estin.com", Location: "jijel",rating: 4 },
  ];

  const lawyers = info.map(function (lawyer, index) {
    return (
      <Link to="/detail_info">
      
      <SwiperSlide className="car" key={index}> {}
        <Lawyer
          img={lawyer.img}
          name={lawyer.name}
          spec={lawyer.spec}
          phone={lawyer.phone}
          mail={lawyer.mail}
          Location={lawyer.Location}
          rating={lawyer.rating}
        />
      </SwiperSlide></Link>
    );
  });

  return (
    <div className="lawyer">
      <div className="barrier"></div>
      <h1>Top Rated Lawyers</h1>
      <section className="cards-container">
        <Swiper
         navigation={true}
         modules={[Navigation]}
         className="mySwiper"
         slidesPerView={3}
        >
          {lawyers}
        </Swiper>
      </section>
    </div>
  );
}

export default CARDS;
