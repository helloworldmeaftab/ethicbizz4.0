import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramYDP from './pages/programs/YDP';
import ProgramSSP from './pages/programs/SSP';
import ProgramEPC from './pages/programs/EPC';
import ProgramERWA from './pages/programs/ERWA';
import ProgramECP from './pages/programs/ECP';
import Schools from './pages/Schools';
import Mentors from './pages/Mentors';
import Events from './pages/Events';
import Success from './pages/Success';
import SuccessDetail from './pages/SuccessDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Join from './pages/Join';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/ydp" element={<ProgramYDP />} />
          <Route path="/programs/ssp" element={<ProgramSSP />} />
          <Route path="/programs/epc" element={<ProgramEPC />} />
          <Route path="/programs/erwa" element={<ProgramERWA />} />
          <Route path="/programs/ecp" element={<ProgramECP />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/success" element={<Success />} />
          <Route path="/success/:slug" element={<SuccessDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;