import { CharacterCard } from "./CharacterCard";

export function CharactersList({ characters }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
