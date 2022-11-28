// endpoint: /api/post
const getAllPosts = async () => {
  const res = await fetch("/api/posts");
  const posts = await res.json();

  return posts;
};

const getPost = async (id) => {
  const res = await fetch(`/api/posts/${id}`);
  const post = await res.json();

  return post;
};

export { getAllPosts, getPost };
