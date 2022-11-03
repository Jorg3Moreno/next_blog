import Image from "next/image";
import Link from "next/link";

import Author from "./_child/author";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import useFetcher from "../lib/fetcher";

export default function Section4() {
  const { isError, isLoading, data } = useFetcher("/api/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {data ? (
              data.map((post, idx) => <Post data={post} key={idx} />)
            ) : (
              <h1 className="text-3xl font-bold text-orange-600 py-10">
                No post to show
              </h1>
            )}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {data ? (
              data.reverse().map((post, idx) => <Post data={post} key={idx} />)
            ) : (
              <h1 className="text-3xl font-bold text-orange-600 py-10">
                No post to show
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={data.img || "/images/not_found.png"}
            width={300}
            height={250}
            alt={"image blog description"}
            className="rounded"
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title}
          </Link>
        </div>
        {data.author ? <Author /> : <></>}
      </div>
    </div>
  );
}
