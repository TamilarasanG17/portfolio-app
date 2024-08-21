import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Typewriter from 'typewriter-effect';
import Objective from './Objective'; 
import Experience from './Experience'; 
import Projects from './Projects'; // Import Projects component
import Education from './Education';


function App() {
  return (
    <div className="App">
      <header className="header">
        <motion.div
          className="intro"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            <Typewriter
              options={{
                strings: ['Tamilarasan G'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>Computer Science Engineer | Full Stack Developer |Designer</p>
        </motion.div>
        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.a
            href="mailto:tamilarasang17@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="animated-button"
          >
            Email Me
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tamilarsan071/"
            whileHover={{ scale: 1.1 }}
            className="animated-button"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/TamilarasanG17"
            whileHover={{ scale: 1.1 }}
            className="animated-button"
          >
            GitHub
          </motion.a>
        </motion.div>
      </header>
      <Objective /> 
      <Education />
      <Experience /> 
      <Projects /> 
     
    </div>
  );
}

export default App;
