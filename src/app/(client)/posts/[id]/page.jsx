import React from "react";
async function getSingleData(id) {
  const res = await fetch("http://localhost:4000/posts/" + id);
  return res.json();
}

const BlogDetails = async ({ params }) => {
  const id = params.id;
  const post = await getSingleData(id);
  return (
    <div>
      <div className="text-center text-white w-[300px] mt-24 mx-auto border-4  p-12 rounded-xl">
        <h1 className="text-2xl">Post id : {post.id}</h1>
        <p className="font-bold text-xl">{post.title}</p>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
