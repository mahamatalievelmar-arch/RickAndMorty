import { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((res) => res.json())
      .then((d) => setChars(d.results))
      .catch((e) => console.log(e));
  }, []);

  if (chars.length === 0) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <Page>
      <Container>
        {chars.map((c) => (
          <Card key={c.id}>
            <Img src={c.image} alt={c.name} />
            <Info>
              <h3>{c.name}</h3>
              <Status>
                <Dot status={c.status} />
                {c.status} – {c.species}
              </Status>
              <Label>Last location:</Label>
              <p>{c.location.name}</p>
              <Label>First seen:</Label>
              <p>{c.origin.name}</p>
            </Info>
          </Card>
        ))}
      </Container>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  background: #313232;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const Card = styled.div`
  background: #2c2c2c;
  width: 280px;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: 0.3s;
`;

const Info = styled.div`
  padding: 14px;
`;

const Status = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.status === "Alive"
      ? "green"
      : props.status === "Dead"
        ? "red"
        : "gray"};
`;

const Label = styled.p`
  font-size: 12px;
  color: #000000;
  margin-top: 4px;
`;
