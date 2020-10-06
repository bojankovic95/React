import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm.js";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Pesma1", id: 1 },
    { title: "Pesma2", id: 2 },
    { title: "Pesma3", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log("useEffect callback", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect callback", age);
  }, [age]);
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={uuidv4()}>{song.title}</li>;
        })}
      </ul>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
