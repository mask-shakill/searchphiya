import Link from "next/link";
import { TbWorldSearch } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-around w-full py-6 font-semibold shadow-sm border-2 rounded-2xl ">
      <h1 className="pr-16 text-2xl flex items-center gap-2">
        <span>
          <TbWorldSearch />
        </span>{" "}
        SearchPhiya
      </h1>
      <form>
        <input
          className="py-1 px-2 border-4 border-white shadow-sm text-black rounded-xl"
          type="text"
          placeholder="Search posts or blogs.."
        />{" "}
        <span>
          <button className="py-[7px] hover:bg-white hover:text-black rounded-lg bg-pink-300 px-3 mx-3 text-black">
            Search
          </button>
        </span>
      </form>
      <ul className="flex gap-x-20">
        <Link
          className="bg-green-600  px-6 py-2 rounded-xl hover:bg-black hover:text-white border-2 border-white"
          href={"/posts"}
        >
          Posts
        </Link>
        <Link
          className="bg-blue-600  px-6 py-2 rounded-xl hover:bg-black hover:text-white border-2 border-white"
          href={"/blogs"}
        >
          Blogs
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
