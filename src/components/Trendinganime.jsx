import { useState, useEffect, useRef } from "react";

export default function TrendingAnime({isHome}) {
        const [animeList, setAnimeList] = useState([]);
      
        useEffect(() => {
          const fetchTrendingAnime = async () => {
            const query = {
              query: `
                query {
                  Page(perPage: 60) {
                    media(sort: TRENDING_DESC, type: ANIME) {
                      id
                      title {
                        romaji
                        english
                      }
                      coverImage {
                        large
                      }
                      episodes
                      status
                      genres
                      averageScore
                    }
                  }
                }
              `,
            };
      
            try {
              const response = await fetch("https://graphql.anilist.co", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(query),
              });
      
              if (!response.ok) {
                throw new Error("Failed to fetch data");
              }
      
              const data = await response.json();
              setAnimeList(data.data.Page.media);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchTrendingAnime();
        }, []);
        console.log(animeList);
        let topTen = "";
        let cssClasses = "";
        if (isHome){
            topTen = animeList.splice(0,10);
            cssClasses = "h-[600px] overflow-y-hidden flex w-full items-center";
        } else {
            topTen = animeList;
            cssClasses = "gap-[-100px] flex-wrap flex w-full items-center justify-between"
        }

    //     const scrollRef = useRef(null);
    // useEffect(() => {
    //   const handleKeyDown = (event) => {
    //     if (scrollRef.current) {
    //       if (event.key === "ArrowDown") {
    //         scrollRef.current.scrollBy({ top: 50, behavior: "smooth" });
    //       } else if (event.key === "ArrowUp") {
    //         scrollRef.current.scrollBy({ top: -50, behavior: "smooth" });
    //       }
    //     }
    //   };
    //   document.addEventListener("keydown", handleKeyDown);
    //   return () => document.removeEventListener("keydown", handleKeyDown);
    // }, []);



    return(
        <>
            // <h1 className="w-full flex justify-center text-xl text-white titleA pb-[40px]">{isHome ? 'Top 10 Trending anime' : 'Trending anime'}</h1>
        <ul className={`${cssClasses} focus:outline-none`} tabIndex="0">
            {topTen.map((anime) => (
                <li key={anime.id} className="card-hover">
                    <div className="glass h-auto w-[300px]">
                    <img src={anime.coverImage.large} alt=""  className="h-1/2"/>
                    <div className="text font-bold text-xs flex flex-col gap-3 pt-2">
                        <h1 className="flex flex-col flex-wrap bebes gap-1">Title: <span>Dub: {anime.title.english} </span> <span>Jav: {anime.title.romaji}</span></h1>
                        <p className="raleway">Episodes: {anime.episodes}</p>
                        <p className=" raleway">Status: {anime.status}</p>
                        <p className="raleway flex flex-wrap gap-2">Genre: {anime.genres.map((genre, index) =>(
                            <span key={index}>{genre}</span>
                        ))}</p>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
        </>

    );
}