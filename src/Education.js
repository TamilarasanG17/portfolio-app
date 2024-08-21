import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EducationCard = ({ school, degree, year, delay }) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.6, delay: delay }}
      className="education-card"
   >
      <h3>{school}</h3>
      <p>{degree} ({year})</p>
   </motion.div>
);

const Education = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const educationDetails = [
      {
         school: 'AAA College of Engineering and Technology',
         degree: 'Bachelor of Engineering',
         year: '2021-2025',
      },
      {
         school: 'Nadar Mahamai Higher Secondary School',
         degree: 'HSC',
         year: '2020-2021',
      },
   ];

   return (
      <section id="education" ref={ref}>
         {educationDetails.map((edu, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.3 }}
               className="education-card"
            >
               <h3>{edu.school}</h3>
               <p>{edu.degree} ({edu.year})</p>
            </motion.div>
         ))}
      </section>
   );
};

export default Education;
