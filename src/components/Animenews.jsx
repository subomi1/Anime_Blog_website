import { useState, useEffect } from "react";

export default function Animenews({ isHome }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1); // Jikan gives this

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v4/characters?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data);
        setLastPage(data.pagination.last_visible_page); // <- this line is important
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [currentPage]);

  let cssClasses = "";
  let topTen = "";

  if (isHome) {
    topTen = characters.slice(0, 10);
    cssClasses = "h-[600px] overflow-y-hidden flex w-full items-center";
  } else {
    topTen = characters;
    cssClasses =
      "gap-[-100px] flex-wrap flex w-full items-center justify-between";
  }

  return (
    <section className="p-5">
      <h1 className="w-full text-xl text-white titleA">
        Some Anime Characters
      </h1>

      {loading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <>
          <ul className={cssClasses}>
            {topTen.map((anime) => (
              <li key={anime.mal_id} className="card-hover">
                <div className="glass h-auto w-[300px]">
                  <img
                    src={anime.images.webp.image_url}
                    alt={anime.name}
                    className="h-1/2"
                  />
                  <div className="text font-bold text-xs flex flex-col gap-3 pt-2">
                    <h1 className="flex flex-wrap bebes gap-1">
                      Name: <span>{anime.name}</span>
                    </h1>
                    <h1 className="flex flex-wrap bebes gap-1">
                      Name-kanji: <span>{anime.name_kanji}</span>
                    </h1>
                    <p className="raleway flex flex-wrap gap-2">
                      Nicknames:{" "}
                      {anime.nicknames.length > 0 ? (
                        anime.nicknames.map((nick, index) => (
                          <span key={index}>{nick}</span>
                        ))
                      ) : (
                        <span>No nickname available</span>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ Pagination Controls */}
          {!isHome && (
            <div className="flex justify-center mt-6 gap-3 text-white">
              <button
                className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span className="px-4 py-2">
                Page {currentPage} of {lastPage}
              </span>
              <button
                className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
                onClick={() =>
                  setCurrentPage((prev) => (prev < lastPage ? prev + 1 : prev))
                }
                disabled={currentPage === lastPage}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
