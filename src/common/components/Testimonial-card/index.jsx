import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { testimonial } from "mock/testimonial";
export const TestimonialCard = () => {
  return (
    <div className="large-12 column">
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        loop
        style={{ cursor: "pointer" }}
      >
        {testimonial?.length >= 1 &&
          testimonial?.map((data) => {
            return (
              <SwiperSlide key={data?.id}>
                <ul
                  id="testimonials-slider"
                  data-orbit
                  data-options="slide_number:false;bullets:false;timer:false;"
                  className="list-unstyled"
                >
                  <li>
                    <p className="quotation">„</p>
                    <p className="testimonial">{data?.comment}</p>
                    <p className="client">{data?.user}</p>
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <ul className="social-list">
        <li>
          <a
            href="https://www.facebook.com/KONNEXZeitarbeit?fref=ts"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-fb-icon icon50fz">
              <span className="path1"></span>
              <span className="path2"></span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/Isa_Yelen"
            target="_blank"
            
            rel="noreferrer"
          >
            <span className="icon-xing-icon icon50fz">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:info@konnex-zeitarbeit.de">
            <span className="icon-mail-icon icon50fz">
              <span className="path1"></span>
              <span className="path2"></span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="social-svg-icon"
            href="https://www.instagram.com/konnex_zeitarbeit"
            target="_blank"
            
            rel="noreferrer"
          >
            <span className="icon-instagram-icon icon50fz">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0Z"
                  fill="currentColor"
                />
                <g fill="#fff">
                  <path d="M316.6 121.3H195.3c-40.9 0-74.1 33.2-74.1 74.1v121.3c0 40.9 33.2 74.1 74.1 74.1h121.3c40.9 0 74.1-33.2 74.1-74.1V195.4c0-40.9-33.2-74.1-74.1-74.1ZM367.1 306c0 33.8-27.4 61.2-61.2 61.2h-100c-33.8 0-61.2-27.4-61.2-61.2V206c0-33.8 27.4-61.2 61.2-61.2h100c33.8 0 61.2 27.4 61.2 61.2v100Z" />
                  <path d="m305.1 207.4-.6-.6-.5-.5c-12.7-12.7-30-19.8-48-19.8-38.2.3-68.9 31.4-68.6 69.6 0 18.5 7.2 36.2 20.2 49.2 12.8 13 30.3 20.3 48.6 20.2 38.6-.8 69.2-32.7 68.3-71.3-.4-17.5-7.3-34.2-19.3-46.8ZM256 301.7c-25.2.4-46-19.8-46.3-45-.4-25.2 19.8-46 45-46.3 25.2-.4 46 19.8 46.3 45v.6c.2 25-20 45.5-45 45.7Zm89-118.5c0 9.1-7.2 16.5-16.3 16.6-4.3 0-8.5-1.7-11.5-4.8-6.4-6.5-6.4-17 .2-23.5 3-3 7.1-4.7 11.4-4.8 3.8 0 7.5 1.3 10.4 3.8l.3.3c.5.4 1 .9 1.5 1.5l.4.4c2.4 3 3.7 6.7 3.7 10.5Z" />
                </g>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
