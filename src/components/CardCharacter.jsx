import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import "./cardCharacter.css"

// export const CardCharacter = () => {

//   const {idCharacter} = useParams()
//   const navigate = useNavigate()
//   const [character, setCharacter] = useState([])

//   useEffect(()=>{
//     const getCharacters = async ()=>{
//       const res = await fetch("https://rickandmortyapi.com/api/character/"+idCharacter)
//       const data = await res.json()
//       setCharacter(data)
//     }

//     getCharacters()
//   },[idCharacter])

//   const indice = parseInt(idCharacter)

//   return (
//     <article className="card">
//       <h2>{character.Nombre}</h2>
//       <h3>{character.Ocupacion}</h3>
//       <img src={character.Imagen} alt={character.Nombre} />
//     </article>
//   );
// };


export const CardCharacter = ({ character }) => {
  return (
    <article className="card">
      <h2>{character.Nombre}</h2>
      <h3>{character.Ocupacion}</h3>
      <img src={character.Imagen} alt={character.Nombre} />
    </article>
  );
}
