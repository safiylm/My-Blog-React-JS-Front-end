import Citation from './components/Categorie/citation.js'
import ManeviyatHome from './components/Esma/home.js'
import Marifetullah from './components/Esma/marifetullah.js'
import Ene from './components/Marifetullah/ene.js'
import Acz from './components/Marifetullah/acz.js'
import Sebepler from './components/Marifetullah/esbap.js'
import Allah from './components/Marifetullah/allah.js'
import Esma from './components/Esma/index.js'
import Social from './components/Article/social.js'
import StyleDeVieMinimaliste from './components/Article/minimaliste.js'
import Voyager from './components/Article/voyage.js'
import MondeInterieur from './components/Article/mondeinterieur.js'
import Lecture from './components/Article/lire.js'
import Mariage from './components/Article/mariage.js'
import Home from './components/home.js'
import EffortEtResultat from './components/Article/efforts-resultat.js'
import Subconscient from './components/Article/subconscient.js'
import Development from './components/Article/developpement.js'
import SensDeLaVie from './components/Article/sensdelavie.js'
import QueteConstante from './components/Article/quete-constante.js'
import MessageCache from './components/Article/message-cache.js'
import InfluenceDesMots from './components/Article/influence-des-mots.js'
import EtreSoiMeme from './components/Article/beyourself.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DependanceAuxvisDesAutres from './components/Article/dependance-avis-des-autres.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/accueil" element={< Home />} />
          <Route path="/citation" element={<Citation />} />

          <Route path="/social" element={<Social />} />
          <Route path="/voyage" element={<Voyager />} />
          <Route path="/minimaliste" element={<StyleDeVieMinimaliste />} />
          <Route path="/monde-interieur" element={<MondeInterieur />} />
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/developpement" element={<Development />} />
          <Route path="/subconscient" element={<Subconscient />} />
          <Route path="/effort-resultat" element={<EffortEtResultat />} />
          <Route path="/sens-de-la-vie" element={<SensDeLaVie />} />
          <Route path="/quete-constante" element={<QueteConstante />} />
          <Route path="/messages-caches" element={<MessageCache />} />
          <Route path="/influence-des-mots" element={<InfluenceDesMots />} />
          <Route path="/soi-toi-meme" element={<EtreSoiMeme />} />
          <Route path="/dependance-aux-avis-des-autres" element={<DependanceAuxvisDesAutres />} />
         

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
