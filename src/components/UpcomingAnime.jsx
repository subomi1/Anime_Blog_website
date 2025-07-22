import { useState, useEffect } from "react";

export default function UpcomingAnime() {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUpcomingAnime = async () => {
            try {
                const response = await fetch("https://api.jikan.moe/v4/seasons/upcoming");
                const data = await response.json();
                setAnimeList(data.data); // Jikan API returns data inside 'data' key
                setLoading(false);
            } catch (error) {
                console.error("Error fetching upcoming anime:", error);
                setLoading(false);
            }
        };

        fetchUpcomingAnime();
    }, []);

    console.log(animeList);
    const shortAnimeList = animeList.splice(0, 5)

    if (loading) return <p>Loading upcoming anime...</p>;

    return (
        <div>
            <h2>Upcoming Anime</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                {animeList.slice(0, 5).map((anime) => (
                    <div key={anime.mal_id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
                        <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: "100%", borderRadius: "5px" }} />
                        <h3>{anime.title}</h3>
                        <p>{anime.synopsis ? anime.synopsis.substring(0, 80) + "..." : "No synopsis available"}</p>
                        <p><strong>Air Date:</strong> {anime.aired.prop.from.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}