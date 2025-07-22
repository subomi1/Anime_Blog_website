import { useState, useEffect } from "react";
export default function Trendingmanga({isHome}) {
    const [mangaData, setMangaData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchManga = async () => {
            setLoading(true);
          try {
            const response = await fetch("https://api.jikan.moe/v4/top/manga?");
            const data = await response.json();
            setMangaData(data.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching trending manga:", error);
            setLoading(false);
          }
        };
    
        fetchManga();
      }, []);

      if (loading){
        return <p>loading...</p>
      }
    return (
        <>
        <h1>Trending Manga</h1>
            <ul className="overflow-x-scroll whitespace-nowrap scrollbar-hide flex gap-2 items-center">
                {mangaData.map((manga) => (
                    <li key={manga.mal_id} className="w-[200px] h-auto bg-white rounded-md p-[10px] ">
                        <img src={manga.images.jpg.image_url} alt='' className="w-[145px] h-[228px]"/>
                        <h2 className="flex">Title: {manga.title}</h2>
                        <p className="raleway">Rank: {manga.rank}</p>
                        <p className="raleway">Rating: {manga.score}</p>
                        {/* <p>Synopsis: {manga.synopsis}</p> */}
                        <p className="flex flex-wrap gap-2 raleway">{manga.themes.map((theme, index) => (
                            <span key={theme.mal_id}>Theme: {theme.name}</span>
                            ))}
                        </p>
                        <p className="raleway flex flex-wrap gap-2">
                            {manga.authors.map((author) =>(
                                <span key={author.mal_id}>Author: {author.name}</span>
                            ))}
                        </p>
                        <p className="flex flex-wrap gap-2 raleway">Genre: {manga.genres.map((genre) => (
                            <span key={genre.mal_id}>{genre.name}</span>
                            ))}
                        </p>
                        {/* <p>Background: {manga.background}</p> */}
                    </li>
                ))}
            </ul>
        </>
    );
}