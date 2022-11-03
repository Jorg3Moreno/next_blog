import Image from "next/image";

import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Related from "../../components/_child/related";

import { getAllPosts, getPost } from "../../lib/helper";

export default function Page(post) {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {post.author ? <Author /> : <></>}
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{post.title || "No title"}</h1>
          <p className="text-gray-500 text-xl text-center">
            {post.subtitle || "No subtitle"}
          </p>
          <div className="py-10">
            <Image
              src={post.img || "/images/not_found.png"}
              width={900}
              height={600}
              alt="image of blog post"
            />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-45">
            <p>
              {post.description || "No description for this post"}
            </p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.postId);

  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
