export function CharacterCard({ character }) {
  return (
    <div className={`card ${character.status.toLowerCase()}`}>
      <img src={character.image} alt={character.name} />
      <div className="card-info">
        <h3>{character.name}</h3>
        <p className="status">
          <span className={`dot ${character.status.toLowerCase()}`}></span>
          {character.status} – {character.species}
        </p>
        <p className="label">Last known location:</p>
        <p>{character.location.name}</p>
        <p className="label">First seen in:</p>
        <p>{character.origin.name}</p>
      </div>
    </div>
  );
}
