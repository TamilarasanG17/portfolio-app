import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#61dafb', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #61dafb' }}
          date="August 2022 - August 2022"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Phoenix SofTech, Madurai
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Intern</h4>
          <p>
            Underwent a two-week internship training on Web Development using
            PHP.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#61dafb', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #61dafb' }}
          date="June 2024 - July 2024"
          iconStyle={{ background: '#282c34', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Live Strem Technologies, Coimbatore
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Intern</h4>
          <p>
            Completed a one-month internship training on Full Stack Development
            using Python.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
