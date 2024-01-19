import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
    "Kauas on pitkä matka",
    "Epäonnistumisen riski on olemassa, kun kyvytön käskee haluttoman tekemään tarpeetonta",
    "Kehitystä se on taantumuskin",
    "Näin on, näin on...",
  ];
  const tyhjaTaulukko = Array(anecdotes.length).fill(0);
  const satunnaisIndexi = () => getRndInteger(0, anecdotes.length - 1);

  const [selected, setSelected] = useState(satunnaisIndexi);
  const [votet, setVote] = useState(tyhjaTaulukko);

  let maxAanet = Math.max(...votet);
  let maxIndeksi = votet.indexOf(maxAanet);

  const satunnainenAnekdootti = () => setSelected(satunnaisIndexi);

  const annaAani = () => {
    const kopioVotet = [...votet];
    kopioVotet[selected] += 1;
    setVote(kopioVotet);
  };

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votet[selected]} votes</div>
      <Button handleClick={satunnainenAnekdootti} text="Next Anecdote" />
      <Button handleClick={annaAani} text="Vote" />

      <h2>Anecdote with Most Votes</h2>
      {maxAanet == 0 ? (
        <div>No votes yet...</div>
      ) : (
        <>
          <div>{anecdotes[maxIndeksi]}</div>
          <div>has {votet[maxIndeksi]} votes</div>
        </>
      )}
    </div>
  );
};

export default App;
