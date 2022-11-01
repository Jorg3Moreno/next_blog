import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import Author from "./_child/author"

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">
        Most Popular
      </h1>

      <Swiper slidesPerView={2}>
        <SwiperSlide>{ Post() }</SwiperSlide>
        <SwiperSlide>{ Post() }</SwiperSlide>
        <SwiperSlide>{ Post() }</SwiperSlide>
        <SwiperSlide>{ Post() }</SwiperSlide>
      </Swiper>
    </section>
  )
}

function Post() {
  return(
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            width={600}
            height={400}
            alt={"image blog description"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel&nbsp;
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - July 02, 2022
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
            Your most unhappy customers are your greatest source of learning 
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
          text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
        <Author />
      </div>
    </div>
  )
}
