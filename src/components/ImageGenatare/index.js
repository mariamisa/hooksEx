import React, { useState, useEffect } from "react";

export default function Image() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    async function getTranslate() {
      const { url } = await fetch(`https://robohash.org/${word ? word : "a"}`);
      console.log(url);
      setResult(url);
    }
    getTranslate();
  }, [word]);
  return (
    <div>
      <input
        placeholder="input word to translate to ar"
        onChange={({ target: { value } }) => value.trim() && setWord(value)}
      />
      <br />
      {result && <img width="200" src={result} alt="random images" />}
    </div>
  );
}
