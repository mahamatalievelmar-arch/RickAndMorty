import { useState, useEffect } from "react";
import { CharactersList } from "./CharactersList";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results.slice(0, 6)))
      .catch((err) => console.error(err));
  }, []);

  if (characters.length === 0) {
    return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#2f3b45] flex items-center justify-center p-6">
      <CharactersList characters={characters} />
    </div>
  );
}
