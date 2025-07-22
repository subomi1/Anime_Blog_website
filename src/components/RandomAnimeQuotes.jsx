import { useState, useEffect } from "react";
export default function RandomAnimeQuotes() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = `
        query {
          Page(perPage: 13) {
            characters(sort: FAVOURITES_DESC) {
              id
              name {
                full
              }
              image {
                large
              }
              description
            }
          }
        }
      `;

      try {
        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const json = await response.json();
        setCharacters(json.data.Page.characters);
      } catch (err) {
        console.error("Error fetching characters:", err);
        setError("Failed to load characters.");
      }
    };

    fetchCharacters();
  }, []);

    if (error) return <p>{error}</p>;
    if (!characters.length) return <p>Loading characters...</p>;
  console.log(characters);
    return(
        <section className="w-full p-10">
            <h1 className="text-4xl titleA text-white">Top 10 Trending Characters</h1>
            <div className="charactersCard card-hover">
                {characters.map((char) => (
                    <div className="charCard glass h-auto w-[300px] p-3" key={char.id}>
                        <img src={char.image.large} alt="" className="w-full"/>
                        <h1>{char.name.full}</h1>
                        <p>{char.description_Height}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}