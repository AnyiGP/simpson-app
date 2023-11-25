import { useEffect, useState } from "react";
import "./App.css";
import { CardCharacter } from "./components/CardCharacter";

function App() {
  const [character, setcharacter] = useState([]);
  const [count, setCount] = useState(0) 
  
  useEffect(() => {
    //first, consulta a la api
    const fetchData = async () => {
      const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=3&page=${count}`);
      const data = await res.json();
      //console.log(data)
      setcharacter(data.docs);
    };

    // return () => {
    //   //second
    // }

    fetchData();
  }, [count]); //third

  //console.log(character);

  const handlerSuma = ()=>{
    setCount(count+1)
  }
  const handlerResta = ()=>{
    count==0?setCount(count):setCount(count-1)
  }


  return (
    <>
      <h1>Los Simpson</h1>
      <h2>{count}</h2>

      <button onClick={handlerSuma}> + </button>
      <button onClick={handlerResta} > - </button>

      <div className="cards">
      {character.map((character, id) => {
        return <CardCharacter key={id} character={character} />;
      })}
      </div>
    </>
  );
}

export default App;
