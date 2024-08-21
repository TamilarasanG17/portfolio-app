import React from 'react';
import { motion } from 'framer-motion';


const projects = [
  {
    title: 'Turf Booking Application',
    description:
      'An online application to book sports turf. Built with MERN stack.',
    tech: 'React.js, Node.js, MongoDB, Express',
    link: '#',
  },
  {
    title: 'Chat Application',
    description:
      'A real-time chat application using the MERN stack.',
    tech: 'React.js, Node.js, MongoDB, Express',
    link: '#',
  },
  {
    title: 'Hawk-Eye Cricket App',
    description:
      'A mobile app similar to Hawk-Eye for cricket, detecting wide balls, speed, and LBW.',
    tech: 'React.js, Firebase, TensorFlow.js',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
        
          >
            <motion.div className="front">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
