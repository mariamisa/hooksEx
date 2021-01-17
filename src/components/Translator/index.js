import React, { useState, useEffect } from "react";

export default function Translator() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  useEffect( () => {
    async function getTranslate(){
        const data = await fetch(
          `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200428T021732Z.a47b9c7034e7647c.a40b1a8a1d0d372b1e84c9f666ebc5cf19a0fc65&text=${word}&lang=ar`
        );
        setResult(data.text[0]);
    }
    getTranslate()
  },[word]);
  return <div>
      <input placeholder="input word to translate to ar" onChange={({target:{value}})=>value.trim()&&setWord(value)} />
      <p>{result}</p>
  </div>;
}
