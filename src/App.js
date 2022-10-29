import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout></SharedLayout>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path='/about' element={<AboutPage></AboutPage>}></Route>
            <Route
              path='/gallery'
              element={<GalleryPage></GalleryPage>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
