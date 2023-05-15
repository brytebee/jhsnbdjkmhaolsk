import React from 'react';
import Image from 'next/image';
import './style.module.css';
import Carousel from 'react-multi-carousel';
import BrandButton from 'components/button/BrandButton';
import styles from './Testimonials.module.scss';
import 'react-multi-carousel/lib/styles.css';

import { fakeData } from './fakeData';

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1. -35
    },
    tablet: {
      breakpoint: { max: 1024, min: 560 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 0.6,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={`${styles.container_cont} overflow-hidden`}>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl={false}
        customTransition="transform 400ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px d-flex align-items-stretch mt-3 px-2"
        centerMode
      >
        {fakeData.map((x) => (
          <div
            className={styles.box}
            key={x.id}
            style={{ background: x.id % 2 === 0 ? '#690136' : '#CDAABC' }}
          >
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Image src={x.img} alt="users" className={styles.img} />
              </div>
              <div className="col-md-9 col-sm-9">
                <p className={styles.header}>{x.header}</p>
                <p className={styles.message}>{x.message}</p>
              </div>
            </div>
            <div className="row">
              <p className={styles.name}>{x.name}</p>
            </div>
            {x.id % 2 === 0 ? (
              <BrandButton
                text="Create Resume"
                type="button"
                styles={styles.courasel_btn}
              />
            ) : (
              <BrandButton
                text="Use a Template"
                type="button"
                styles={styles.courasel_btn}
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
