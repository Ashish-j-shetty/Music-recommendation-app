import React, { useState } from "react";
import "./styles.css";

const buttons = ["pop", "House music", "EDM"];

const musicDictionary = [
  { title: "Shape of you", artist: "Ed sheeren", genre: "pop" },
  { title: "yummy", artist: "Justin Bieber ", genre: "pop" },
  { title: "7 rings", artist: "Ariana Grande", genre: "pop" },

  { title: "wake me up", artist: "Avicii", genre: "EDM" },
  { title: "Lean on", artist: "DJ snake", genre: "EDM" },
  { title: "Closer", artist: "Chain smoker", genre: "EDM" },

  {
    title: "Dont you worry child",
    artist: "Sweedish house mafia",
    genre: "House music"
  },
  { title: "If I loose myself", artist: "One direction", genre: "House music" },
  { title: "One", artist: "Dua lipa", genre: "House music" }
];

export default function App() {
  const [selection, setGenre] = useState("House music");

  const genre = (type) => {
    let musics = [];
    musicDictionary.map((item) => {
      if (item.genre === type) musics.push(item);
    });
    return musics;
  };

  return (
    <div className="App">
      <h1>🎧 My Music genre's</h1>
      <p>Check out my favorite music genre's </p>

      <div>
        {buttons.map((item) => (
          <button onClick={() => setGenre(item)}>{item}</button>
        ))}

        <hr />
        <div style={{ textAlign: "left" }}>
          <ul>
            {selection &&
              genre(selection).map((item) => {
                return (
                  <li key={item.title}>
                    <div style={{ fontSize: "larger" }}>{item.title}</div>
                    <div style={{ fontSize: "smaller" }}>by {item.artist}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
