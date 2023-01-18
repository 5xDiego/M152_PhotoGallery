import "./App.css";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { Fotogalerie } from "./pages/Fotogalerie";
import { Animation } from "./pages/Animation";
import { NoPage } from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />}/> 
        <Route path='/video' element={<Video />}/>
        <Route path='/fotogalerie' element={<Fotogalerie />}/>
        <Route path='/animation' element={<Animation />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
