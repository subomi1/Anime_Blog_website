import { useState, useEffect } from "react";

export default function Animenews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.jikan.moe/v4/anime/news") // 5114 = Fullmetal Alchemist: Brotherhood
        .then((response) => response.json())
        .then((data) => {
          setNews(data.data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    console.log(news);

    return (
        <></>
    );
}