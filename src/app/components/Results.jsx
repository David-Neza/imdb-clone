import React from "react";

export default function Results({ results }) {
  console.log("--my results", results[0].original_title);
  return (
    <div>
      Byee--
      {/* {results[0]} */}
      {results.map((result) => (
        <div>{result.original_title}</div>
      ))}
    </div>
  );
}
