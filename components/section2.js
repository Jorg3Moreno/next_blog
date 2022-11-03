import Image from "next/image";
import Link from "next/link";

import Author from "./_child/author";
import useFetcher from "../lib/fetcher";

export default function Section2() {
  const { isError, isLoading, data } = useFetcher("/api/posts");

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>There is an error, please try it later</div>

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data ? (
          data.map((post, idx) => <Post data={post} key={idx} />)
        ) : (
          <h1>No post to show</h1>
        )}
      </div>
    </section>
  );
}

function Post({ data }) {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={data.img || "/images/not_found.png"}
            width={500}
            height={350}
            alt={"image blog description"}
            className="rounded"
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
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {data.title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        {data.author ? <Author /> : <></>}
      </div>
    </div>
  );
}
