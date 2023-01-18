import { Navbar } from "../comps/Navbar";
import "./pages.css";

export function Video() {
  return (
    <>
      <Navbar />
      <div id="videoContainer">
        <div id="videoDescription">
          <h2> Video </h2>
          <p>
            {" "}
            Dieses Video wurde in Zusammenarbeit mit Leandro Ferrer erstellt.
            Aufgenommen an der BBW und ergänzt in Blender. Audio und Video
            effekte haben wir mit Premiere Pro hinzugefügt.{" "}
          </p>
          <p>
            Es geht im Video um die sogennanten "Backrooms", ein unendlicher
            Raum der von menschenähnlichen Kreaturen bewohnt wird. Unser
            Protagonist fällt während der Schullektion in einen Tiefschlaf. Wenn
            er wieder erwacht, spührt er bereits, dass etwas nicht recht ist.
            Dieses Gefühl bestätigt sich als er die Tür verlässt und sich in den
            Backrooms widerfindet. Es dauert nicht lange, bis er auf einer
            dieser "Kreaturen" stösst und noch weniger bis er von dieser in der
            Dunkelheit verschlungen wird.
          </p>
          <p>
            Dieses Projekt hat mir, obwohl der Aufwand gross war, Spass bereitet
            und mich wider in Premiere Pro editing aufgefrischt was 
            eine Angenehme abwechslung zum Programmieren war.
          </p>
          <br></br>
          <span> © Diego Schindele 2023 </span>
        </div>
        <video
          src="https://trapgaming.spdns.org/src/priv/Backrooms.mp4"
          type="video/mp4"
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
