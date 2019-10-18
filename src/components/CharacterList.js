import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList,setCharlist] = useState([]);
  const [searchChar, setSearchChar] = useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then((Response)=>{
        console.log(Response);
        setCharlist(Response.data.results);
      })
      .catch((error)=>{
        console.log(error);
      });

  }, []);

  const searchedCharacter = (searchChar) =>{
    setSearchChar(searchChar);
  };

  const updateList = (searchedCharacter) =>{
    console.log(charList)
    const array = charList;
    console.log(`This is the array: ${charList}`)
    console.log(`this is searched ${searchedCharacter}`)
    const newArray = charList.filter((character)=>{
      console.log(`testing this object: ${character}`)
      if (character.name.toLowerCase().indexOf(searchedCharacter.toLowerCase()) !== -1){
        return true;
      }
    });
    console.log(`this is new array ${newArray}`);
    newArray.map((item,index)=>(
      <CharacterCard key={index} object={item}/>
    ));
  }

  function newList(keyword){
    return function(character){
      if (character.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
        return true;
      }
    }
  }

  return (
    <section className="character-list">
      <SearchForm searchedCharacter={searchedCharacter}/>
      <div>
        {charList.filter(newList(searchChar)).map((item,index)=>(
      <CharacterCard key={index} object={item}/>
        ))}

      </div>
    </section>
  );
}
