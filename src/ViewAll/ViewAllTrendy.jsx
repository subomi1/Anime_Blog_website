import { Link } from "react-router-dom";

export default function Viewalltrendy() {
  return (
    <section className="flex justify-center pt-2">
      <Link
        to="/trending"
        className="backdrop-blur-md bg-white/10 text-white border border-white/20 py-2 px-4 rounded-md hover:bg-white/20 transition duration-300"
      >
        View All Trending Anime
      </Link>
    </section>
  );
}
