const baseURL = process.env.BASE_URL;

// endpoint: /api/post
const getAllPosts = async () => {
  const res = await fetch(`${baseURL}/api/posts`);
  const posts = await res.json();

  return posts;
};

const getPost = async (id) => {
  const res = await fetch(`${baseURL}/api/posts/${id}`);
  const post = await res.json();

  return post;
};

export { getAllPosts, getPost };
