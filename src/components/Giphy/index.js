import React, { useState, useEffect } from "react";

export default function Giphy() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let isCurrent = true;
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=DH3LNWHwiGF7fVIj627gpduXNCS4gz81&q=${word}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        if (isCurrent) {
          setResult(data.slice(0, 5));
        }
      })
      .catch((e) => setError("some error happen try again later"));
    return () => {
      isCurrent = false;
    };
  }, [word]);
  return (
    <div>
      {error && <p>{error}</p>}
      <input
        placeholder="input search"
        onChange={({ target: { value } }) => value.trim() && setWord(value)}
      />
      <p>
        {result &&
          result.map((el) => (
            <img src={el.images["480w_still"].url} alt="gif" />
          ))}
      </p>
    </div>
  );
}
