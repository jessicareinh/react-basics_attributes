import React from "react";
import "./styles.css";

export default function App() {
  return Article();

}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">An Article</h2>
      <label htmlFor="myFirstInput">Pls give me some input:</label>
      <input id="myFirstInput" type="text" />
      <a
        className="article__link"
        href="https://react.dev"
      >
        Click me!
      </a>
    </article>
  );
}