import { useEffect, useState } from "react";
import "./App.css";
import { CardCharacter } from "./components/CardCharacter";

function App() {
  const [character, setcharacter] = useState([]);
  
  useEffect(() => {
    //first, consulta a la api
    const fetchData = async () => {
      const res = await fetch("https://apisimpsons.fly.dev/api/personajes");
      const data = await res.json();
      //console.log(data)
      setcharacter(data.docs);
    };

    // return () => {
    //   //second
    // }

    fetchData();
  }, []); //third

  console.log(character);

  return (
    <>
      <h1>Los Simpson</h1>
      <div className="cards">
      {character.map((character, id) => {
        return <CardCharacter key={id} character={character} />;
      })}
      </div>
    </>
  );
}

export default App;
