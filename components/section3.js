import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import Author from "./_child/author";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import useFetcher from "../lib/fetcher";

export default function Section3() {
  const { isError, isLoading, data } = useFetcher("/api/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        }}
      >
        {data ? (
          data.map((post, idx) => (
            <SwiperSlide key={idx}>
              <Post data={post} />
            </SwiperSlide>
          ))
        ) : (
          <h1 className="text-3xl font-bold text-orange-600 py-10">
            No post to show
          </h1>
        )}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${data.id}`}>
          <Image
            src={data.img || "/images/not_found.png"}
            width={600}
            height={400}
            alt={"image blog description"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            href={`/posts/${data.id}`}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {data.description || "Description"}
        </p>
        {data.author ? <Author {...data.author} /> : <></>}
      </div>
    </div>
  );
}
