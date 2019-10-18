import React, { useState } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm(props) {
  const [character, setCharacter] = useState({
    name:""
});
const changeHandler = (event)=>{
  setCharacter({ ...character, [event.target.name]: event.target.value });
};
const submitEvent = (event) =>{
  event.preventDefault();
  props.searchedCharacter(character.name);
  setCharacter({
      name:""
  });
};
 
  return (
    <section className="search-form">
      <h1>Search for your favorite Character!</h1>
     <form onSubmit={submitEvent}>
            <input type="text" name="name" placeholder="Enter a character's name" onChange={changeHandler} value={character.name}/><br></br>
            <button type="submit">Search</button>
        </form>
    </section>
  );
}
