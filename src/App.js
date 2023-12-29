import Lifestyle from './components/PelliculePhotos/lifestyle.js'
import LessonsforLife from './components/PelliculePhotos/nasihat.js'
import Home from './components/Home.js'
import Blog from './components/Blog/index.js'
import Article from './components/Blog/article.js'
import Marifetullah from './components/Esma/marifetullah.js'
import ListeRecette from './components/ListeRecette/index.js'
import Esma from './components/Esma/index.js'
import Power from './components/Esma/power.js'
import Superiority from './components/Esma/superiority.js'
import IsmiAzam from './components/Esma/ismi-azam.js'
import Merciful from './components/Esma/merciful.js'
import Generous from './components/Esma/generous.js'
import Auteurs from './components/Citation/Auteur/index.js'
import Mevlana from './components/Citation/Auteur/mevlana.js'
import Hadisikudsi from './components/Citation/Auteur/allah.js'
import Citation from './components/Citation/index.js'
import CitationTag from './components/Citation/tag.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article" element={<Article />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/lessonsforLife" element={<LessonsforLife />} />
          <Route path="/marifetullah" element={<Marifetullah />} />
          <Route path="/liste-recette" element={<ListeRecette />} />
          <Route path="/esma" element={<Esma />} />
          <Route path="/esma/power" element={<Power />} />
          <Route path="/esma/superiority" element={<Superiority />} />
          <Route path="/esma/ismi-azam" element={<IsmiAzam />} />
          <Route path="/esma/merciful" element={<Merciful />} />
          <Route path="/esma/generous" element={<Generous />} />
          <Route path="/auteurs" element={<Auteurs />} />
          <Route path="/auteurs/mevlana" element={<Mevlana />} />
          <Route path="/auteurs/hadisikudsi" element={<Hadisikudsi />} />
          <Route path="/citation" element={<Citation />} />
          <Route path="/citation/tag" element={<CitationTag />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
