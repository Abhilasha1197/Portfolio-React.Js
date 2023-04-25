import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Full Stack Development course
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Newton School
          </h4>
          <p>Build Frontend Projects from scratch using Frontend Skills.</p>
          <p>Tech Skills learnt: React.js, Redux, javaScript, HTML5, CSS3, JAVA</p>
          <p>Participated in various coding contests</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Bachelor's Degree
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
             Madan Mohan Malviya University Of Technology  
          </h4>
          <p>Civil Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Secondary School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Sunbeam English School, Lanka, Varanasi
          </h4>
           <p>PCM</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Matriculation
          </h3>
          <p>Central Academy, Deoria, Uttar Pradesh</p>
        </VerticalTimelineElement>
       
       

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
