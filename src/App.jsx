import { useState, useEffect } from "react";
import { CharacterCard } from "./components/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results.slice(0, 6));
      setLoading(false);
    }
    fetchCharacters();
  }, []);

  if (loading)
    return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;

  return (
    <div className="page">
      <div className="cards-container">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default App;
