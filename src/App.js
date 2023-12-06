import Blog from './components/blog.js'
import Home from './components/Home.js'
import Marifetullah from './components/marifetullah.js'
import ListeRecette from './components/ListeRecette/index.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/marifetullah" element={<Marifetullah />} />
          <Route path="/liste-recette" element={<ListeRecette />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
