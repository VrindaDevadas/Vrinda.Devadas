// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      <div className="bg-gradient-to-b from-brand-gradient-from to-brand-gradient-to min-h-screen p-4 sm:p-8 rounded-lg">
        <Header />
        <main>
          <Hero />
          <Projects />
          <AboutMe />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;