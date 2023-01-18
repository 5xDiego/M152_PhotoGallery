import { Navbar } from "../comps/Navbar";
import "./pages.css";

export function Animation() {
  return (
    <>
      <Navbar />
      <div id="animationContainer">
        <div id="animationDescription">
          <h2> Animation </h2>
          <p>
            Bei meiner Animation welche ich 'Apple Tree' gennant habe, geht
            es um einen Samen welcher zu einem Apfelbaum wächst. Ein Apfal
            dieses Baumes fällt, rollt ein Stück und beginnt den Prozess erneut,
            womit der Kreis geschlossen wird.
          </p>
          <p>
            Die Arbeit war sehr erfreuend. Yannick Ledermann hatte mir dazu
            erlaubt auf seinem IPad eine Applikation namens Procreate zu nutzen.
            Es war das erste Mal, dass ich eine eigene Animation in diesem Stil
            erstellt habe, wodurch ich einiges neues gelernt habe und vielleicht
            eine neue Freizeitbeschäftigung gefunden habe.
            <br />
            ...wären IPads nur nicht so teuer.
          </p>
          <br></br>
          <span> © Diego Schindele 2023 </span>
        </div>
        <div id="animation">
          <img src="CircleOfLife.gif" />
          <span>Apple Tree by Diego Schindele</span>
        </div>
      </div>
    </>
  );
}
