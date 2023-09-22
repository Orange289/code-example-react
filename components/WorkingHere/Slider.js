import { Container } from "react-grid-system"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

import styles from "./Slider.module.scss"

export default function Slider() {
  const items = [
    "gallery-pic-2.jpg",
    "gallery-pic-3.jpg",
    "gallery-pic-4.jpg",
    "gallery-pic-2.jpg",
    "gallery-pic-3.jpg",
    "gallery-pic-4.jpg",
  ]

  return (
    <section className={styles.slider}>
      <Container>
        <Swiper
          className={`${styles.slider__swiper} workinghereswiper`}
          slidesPerView={3}
          spaceBetween={16}
          // loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay]}
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  loading="lazy"
                  src={`/images/working-here/${item}`}
                  alt={item}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </section>
  )
}
