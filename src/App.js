import React, { useState } from "react";
import "./styles.css";

// var headingtext = "Human";
var color = "red";
// var username =prompt("your name")
var username = "Tarun";
var clickcount = 0;

const emoji = {
  "😊": "smiling",
  "🔥": "fire",
  "💜": "heart",
  "🤣": "laugh",
  "😢": "sad",
  "🌹": "rose",
  "😎": "cool",
  "😒": "annoying",
  "😑": "disappointed",
  "🤢": "boring",
  "🐬": "baby shark",
  "⏳": "timeout",
  "🎶": "music",
  "🎂": "cake",
  "👏": "clap",
};

export default function App() {
  const [clickcount, setclickcount] = useState(0);
  const [typed, settyped] = useState("");
  const [meaning, setmeaning] = useState("");
  var list_print = [" one", "two", "three"];

  var emoji_key = Object.keys(emoji);
  function likeclickHAndler() {
    var newclickcount = clickcount + 1;
    setclickcount(clickcount + 1);
  }
  function inputeventhandler(event) {
    console.log(event.target.value);
    settyped(event.target.value);
  }

  function emojieventhandler(event) {
    console.log(event.target.value);
    var emojiinput = event.target.value;
    var meaning = emoji[emojiinput];
    if (meaning === undefined) {
      meaning = "not declared in our database!!";
    }
    setmeaning(meaning);
    console.log(meaning);
  }
  function getbgcolor(index) {
    if (index % 2 == 0) {
      return "red";
    }
    return "blue";
  }
  function clickitememoji(index) {
    console.log(index);
  }

  function emojiclicker(emoji_ic) {
    var meaning = emoji[emoji_ic];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      {/* <alert /> */}
      <h1>
        {/* Welcome {headingtext} */}
        Hello
        {/* <span style={{ color: color }}> {username}</span> */}
      </h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <h2>Welcome to Emojology !</h2>
      {/* <button onClick={likeclickHAndler}>Click me</button>
      <h2>Number of time clicked {clickcount}</h2> */}

      {/* <input onChange={inputeventhandler}></input>
      <h2>Typed {typed}</h2> */}
      <h2> We can suggest you emoji meanings </h2>
      <h3>Go Ahead and enter you emoji below........</h3>

      <input placeholder="enter emoji" onChange={emojieventhandler}></input>
      <h2>Meaning : {meaning}</h2>

      {/* <ul>
        {list_print.map(function (itme, index) {
          return (
            <p
              key={itme}
              onClick={() => clickitememoji(itme)}
              style={{ backgroundColor: getbgcolor(index) }}
            >
              {itme}
            </p>
          );
        })}
      </ul> */}

      <h3>Emoji we know :</h3>
      <ul>
        {emoji_key.map(function (itme, index) {
          return (
            <span
              key={itme}
              onClick={() => emojiclicker(itme)}
              style={{ cursor: "pointer" }}
            >
              {itme} {"  "}{" "}
            </span>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * thinks to know
 * class=> classname
 * style  => takes an object not  ""
 * browser DOM is what browser understands
 * React DOM is library convert react to DOM
 * USeSTate is a function has parameter tohae initial value
 * returns 2 value one param and second a function which returns a function
 * map can only be used with araay
 *
 */
