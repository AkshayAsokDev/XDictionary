import './App.css';
import { useState } from 'react';

const dict = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]



function App() {

  const [search, setSearch] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {

    const word = dict.find((item) => item.word.toLowerCase() === search.toLowerCase());
    // console.log("word >> ", word);
    if(word){
      setDefinition(word.meaning);
    }
    else{
      setDefinition("Word not found in the dictionary.")
    }
  }

  return (
    <div className="App">
      
      <h1>Dictionary App</h1>

      <input placeholder='Search for a word...' 
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button
      onClick={handleSearch}
      >Search</button>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default App;
