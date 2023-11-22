import Blog from './components/blog.js'
import Accueil from './components/accueil.js'
import Marifetullah from './components/marifetullah.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/m" element={<Marifetullah />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
