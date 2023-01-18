import { Navbar } from "../comps/Navbar";
import Lightroom from "react-lightbox-gallery";
import "./pages.css";

const images = [
  {
    src: "onyx_andme.jpeg",
    desc: "Onyx und Ich in Stockholm",
  },
  {
    src: "onyx_bench.jpeg",
    desc: "Onyx auf einer Bank im Hundepark",
  },
  {
    src: "onyx_car2.jpeg",
    desc: "Onyx im Auto",
  },
  {
    src: "onyx_car1.jpeg",
    desc: "Onyx blickt während der Fahrt aus dem Fenster, wie Hunde das hald so tun...",
  },
  {
    src: "onyx_alps.jpeg",
    desc: "Onyx beim Chäserrugg",
  },
  {
    src: "onyx_christmas.jpeg",
    desc: "Onyx an Weihnachten",
  },
  {
    src: "onyx_festival.jpeg",
    desc: "Onyx an einem Musik-Festival",
  },
  {
    src: "onyx_flowers.jpeg",
    desc: "Manchmal versteckt er sich gerne in Blumen",
  },
  {
    src: "onyx_log1.jpeg",
    desc: "Onyx auf einem Baumstamm",
  },
  {
    src: "onyx_log2.jpeg",
    desc: "...er ist noch immer auf dem Baumstamm",
  },
  {
    src: "onyx_log3.jpeg",
    desc: "...und noch eins.",
  },
  {
    src: "onyx_rheinfall.jpeg",
    desc: "Onyx besucht den Rheinfall... Er mag Wasser nicht sehr",
  },
  {
    src: "onyx_sunbathing1.jpeg",
    desc: "Onyx baded in der Sonne",
  },
  {
    src: "onyx_sunbathing2.jpeg",
    desc: "Er ist wirklich gerne in der Sonne",
  },
  {
    src: "onyx_widelense.jpeg",
    desc: ":)",
  },
];

const settings = {
  columnCount: {
    default: 2,
    mobile: 2,
    tab: 3,
  },
  mode: "dark",
};

export function Fotogalerie() {
  return (
    <>
      <Navbar />
      <div id="fotogalerie">
        <div id="galleryDescription">
          <h2> Fotogalerie </h2>
          <p>
            Für meine Fotogalerie habe ich mich dazu entschieden, eine
            Zusammenstellung der besten Bilder von Onyx, den Hund meiner
            Freundin, zu nutzen.
          </p>
          <p>
            Die Arbeit war eher einfach, da ich ein Plugin namens
            'react-lightbox-gallery' für die Galerie genuzt habe. Das suchen der
            passenden Bilder hat mir grosse Freude bereitet und war neben
            einigen Fehlerbehebungen des zuvor gennanten Plugins der
            aufwendigste Teil dieser Arbeit.
          </p>
          <br></br>
          <span> © Diego Schindele 2023 </span>
        </div>
        <div id="galleryContainer" onClick={() => handleClick()}>
          <Lightroom images={images} settings={settings} />
        </div>
      </div>
    </>
  );
}

function handleClick() {
  window.scroll({ top: 0, behavior: "smooth" });
}
