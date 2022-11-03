import Image from "next/image";
import Link from "next/link";

import Author from "./author";
import Spinner from "./spinner";
import Error from "./error";

import useFetcher from "../../lib/fetcher";

export default function Related() {
  const { isError, isLoading, data } = useFetcher("/api/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {data ? (
          data.map((post, idx) => (
            <Post data={post} key={idx} />
          ))
        ) : (
          <h1 className="text-3xl font-bold text-orange-600 py-10">
            No post to show
          </h1>
        )}
      </div>
    </section>
  );
}

function Post({ data }) {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${data.id}`}>
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
            href={`/posts/${data.id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title}
          </Link>
        </div>
        {data.author ? <Author {...data.author} /> : <></>}
      </div>
    </div>
  );
}
