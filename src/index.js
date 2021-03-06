import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// We create a mock list/array named Characters, from which
// display the list in our component.
const characters = [
  "Harry Potter",
  "Luna Lovegood",
  "Neville Longbottom",
  "Hermione Granger",
  "Ron Weasley",
  "Ginny Weasley",
  "Fred Weasley",
  "George Weasley",
  "Albus Dumbledore ",
  "Aberforth Dumbledore ",
  "Dudley Dursley ",
  "Petunia Dursley ",
  "Vernon Dursley",
  "Cornelius Fudge",
  "Rubeus Hagrid ",
  "Viktor Krum ",
  "Bellatrix Lestrange",
  "Narcissa Malfoy",
  "Draco Malfoy"
];












function App() {
  /* STEP 1: Create searchTerm and searchResults state
   - searchTerm will save the data from the search input on every occurance of the change event.
   - searchResults is used to set the search result.
  */
  const [searchTerm, setSearchTerm] = useState("");   // this is the input value
  const [searchResults, setSearchResults] = useState(characters)   // searchResults is used to set the search result, starts by showing all characters.


  /* STEP 4: Create useEffect that watches searchTerm and returns a new list
   of searchResults based on search box input value.
   */

   // create useEffect that watches searchTerm, when term changes, filter for new results. Returns a new array
  // of searchResults based on search box input value. 
  useEffect(() => {

  //characters would likely be response.data if API 
    const results = characters.filter((character) => {
      return character.toLowerCase().includes(searchTerm.toLowerCase())
    });

    setSearchResults(results)
  }, [searchTerm]);

  /* STEP 2: create handleChange function and add to input 
   The handleChange method takes the event object as the argument
   and sets the current value of the input to the searchTerm state
   using setSearchTerm
  */
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the state get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the state. */}
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="character-list">
        <ul>
          {/* STEP 3: Map over searchResults to see values in that array */}
          {searchResults.map((character) => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}






































ReactDOM.render(<App />, document.getElementById("root"));
