import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Education from './pages/Education';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Skills from './components/Skills';
import EducationResume from './components/EducationResume';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<About />} />
              <Route path="education" element={<Education />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume />} >
              <Route index element={<EducationResume />} />
                <Route path="educationresume" element={<EducationResume />} />
                <Route path="skills" element={<Skills/>}/>
              </Route>
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
