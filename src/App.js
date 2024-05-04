import Lifestyle from './components/PelliculePhotos/lifestyle.js'
import LessonsforLife from './components/PelliculePhotos/nasihat.js'
import Citation from './components/PelliculePhotos/citation.js'
import ManeviyatHome from './components/Esma/home.js'
import Marifetullah from './components/Esma/marifetullah.js'
import Esma from './components/Esma/index.js'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Lifestyle />} />
          <Route path="/accueil" element={<Lifestyle />} />
          <Route path="/lessonsforLife" element={<LessonsforLife />} />
          <Route path="/citation" element={<Citation />} />


          <Route path="/2108200015" element={<ManeviyatHome />} />
          <Route path="/2108200015/marifetullah" element={<Marifetullah />} />
          <Route path="/2108200015/esma" element={<Esma />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
