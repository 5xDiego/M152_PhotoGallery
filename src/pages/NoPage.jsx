import { Link } from "react-router-dom";
import "./pages.css";

export function NoPage(){
    return(
        <>
        <h2> 404 Page not found. </h2>
        <Link id="p404home" to="/"> Home </Link>
        </>
    );
}