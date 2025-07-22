import { Link } from "react-router-dom";

export default function  Viewalltrendy() {
    return (
        <section className="flex justify-center pt-2">
            <Link to="/trending" className="bg-gray-600 px-5 py-3 border rounded-sm border-none">
                View All Trending Anime
            </Link>
        </section>
        
    );
}