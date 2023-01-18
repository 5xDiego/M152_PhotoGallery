import { Navbar } from "../comps/Navbar";
import "./pages.css";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export function Home() {
  return (
    <>
      <Navbar />
      <div id="dashboard">
        <h2>
          {" "}
          Hallöchen, Willkommen! <Emoji symbol="👋" />{" "}
        </h2>
        <p>Diese Seite habe ich als Projektarbeit im Modul 152 erstellt.</p>
        <p>
          Sie beinhaltet ein Video, eine Fotogallerie und eine Animation - alle
          selbst geschaffen.
        </p>
      </div>
    </>
  );
}
