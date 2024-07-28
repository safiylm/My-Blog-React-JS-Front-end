import Lifestyle from './components/PelliculePhotos/lifestyle.js'
import LessonsforLife from './components/PelliculePhotos/sagesse.js'
import Citation from './components/PelliculePhotos/citation.js'
import ManeviyatHome from './components/Esma/home.js'
import Marifetullah from './components/Esma/marifetullah.js'
import Ene from './components/Marifetullah/ene.js'
import Acz from './components/Marifetullah/acz.js'
import Sebepler from './components/Marifetullah/esbap.js'
import Allah from './components/Marifetullah/allah.js'
import Esma from './components/Esma/index.js'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Lifestyle />} />
          <Route path="/accueil" element={<Lifestyle />} />
          <Route path="/sagesse" element={<LessonsforLife />} />
          <Route path="/citation" element={<Citation />} />


          <Route path="/2108200015" element={<ManeviyatHome />} />
          <Route path="/2108200015/marifetullah" element={<Marifetullah />} />
          <Route path="/2108200015/marifetullah/ene" element={<Ene />} />
          <Route path="/2108200015/marifetullah/acz" element={<Acz />} />
          <Route path="/2108200015/marifetullah/sebepler" element={<Sebepler />} />
          <Route path="/2108200015/marifetullah/allah" element={<Allah />} />
          
          <Route path="/2108200015/esma" element={<Esma />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
