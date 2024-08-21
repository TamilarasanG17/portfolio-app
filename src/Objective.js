import React from 'react';
import { motion } from 'framer-motion';

const Objective = () => {
  return (
    <motion.div
      className="objective"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Objective</h2>
      <p>
        Passionate and detail-oriented Computer Science Engineer with a strong
        foundation in full stack development, particularly with the MERN stack.
        Seeking to leverage hands-on experience in real-time application
        development and user-centric design in a challenging role that fosters
        growth and innovation.
      </p>
    </motion.div>
  );
};

export default Objective;
