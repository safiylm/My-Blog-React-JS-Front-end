import Blog from './components/blog.js'
import Accueil from './components/accueil.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />

          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
