import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Projects from './pages/Projects';
import Donate from './pages/Donate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
        <Route path="projects" element={<Projects />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}

export default App;
