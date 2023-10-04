import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState(["apple", "kiwi", "orange"]);
  const [search, setSearch] = useState("");
  const searchResult = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <input
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {searchResult.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
