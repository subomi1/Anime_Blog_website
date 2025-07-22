import { useState, useEffect } from "react";

export default function Animenews(isHome) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/characters?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let cssClasses = "";
  let topTen = "";
  console.log(characters);
  if (isHome) {
    topTen = characters.splice(0, 10);
    cssClasses = "h-[600px] overflow-y-hidden flex w-full items-center";
  } else {
    topTen = characters;
    cssClasses =
      "gap-[-100px] flex-wrap flex w-full items-center justify-between";
  }

  return (
    <section className="p-5">
      <h1 className="w-full text-xl text-white titleA pb-5">
        Some Anime Characters
      </h1>
      <ul className={cssClasses}>
        {topTen.map((anime) => (
          <li key={anime.mal_id} className="card-hover">
            <div className="glass h-auto w-[300px]">
              <img src={anime.images.webp.image_url} alt="" className="h-1/2" />
              <div className="text font-bold text-xs flex flex-col gap-3 pt-2">
                <h1 className="flex flex-wrap bebes gap-1">
                  Name: <span>{anime.name} </span>
                </h1>
                <h1 className="flex flex-wrap bebes gap-1">
                  Name-kanji: <span>{anime.name_kanji} </span>
                </h1>
                <p className="raleway flex flex-wrap gap-2">
                  Nicknames:{" "}
                  {anime.nicknames.map((nick, index) => (
                    <p key={index}>
                      {nick}
                      <br />
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
