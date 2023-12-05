import Link from "next/link";
async function getPosts() {
  const res = await fetch("http://localhost:4000/posts");
  return res.json();
}
const Posts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-12 mx-10">
        {posts.map((post) => {
          const { id, title, img, color } = post;
          return (
            <div
              key={id}
              className="text-white border-4 rounded-xl flex flex-col items-center py-4 "
            >
              <h1>{img}</h1>
              <h1>{title}</h1>
              <p>{color}</p>
              <Link
                href={`/posts/${id}`}
                className="bg-lime-400 rounded-xl px-2 text-black mt-2"
              >
                See More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
