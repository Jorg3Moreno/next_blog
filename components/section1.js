import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

import Author from "./_child/author";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import useFetcher from "../lib/fetcher";

export default function Section1() {
  SwiperCore.use([Autoplay]);
  const { isError, isLoading, data } = useFetcher("/api/trending");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
        >
          {data ? (
            data.map((post, idx) => (
              <SwiperSlide key={idx}>
                <Slide data={post} />
              </SwiperSlide>
            ))
          ) : (
            <h1 className="text-3xl font-bold text-orange-600 py-10">
              No post to show
            </h1>
          )}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={data.img || "/images/not_found.png"}
            width={600}
            height={600}
            alt={"image blog description"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {data.category || "Uncategorized"}&nbsp;
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - {data.published || "Today"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {data.description || "Description"}
        </p>
        {data.author ? <Author /> : <></>}
      </div>
    </div>
  );
}
