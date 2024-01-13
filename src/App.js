import Lifestyle from './components/PelliculePhotos/lifestyle.js'
import LessonsforLife from './components/PelliculePhotos/nasihat.js'
import Home from './components/Home.js'
import Marifetullah from './components/PelliculePhotos/marifetullah.js'
import Esma from './components/Esma/index.js'
import Power from './components/Esma/power.js'
import Superiority from './components/Esma/superiority.js'
import IsmiAzam from './components/Esma/ismi-azam.js'
import Merciful from './components/Esma/merciful.js'
import Generous from './components/Esma/generous.js'
import Citation from './components/PelliculePhotos/citation.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/lessonsforLife" element={<LessonsforLife />} />
          <Route path="/marifetullah" element={<Marifetullah />} />
          <Route path="/esma" element={<Esma />} />
          <Route path="/esma/power" element={<Power />} />
          <Route path="/esma/superiority" element={<Superiority />} />
          <Route path="/esma/ismi-azam" element={<IsmiAzam />} />
          <Route path="/esma/merciful" element={<Merciful />} />
          <Route path="/esma/generous" element={<Generous />} />
          <Route path="/citation" element={<Citation />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
