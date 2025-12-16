import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/ExampleData";

interface VerticalItem {
  title: string;
  company_name: string;
  iconBg: string;
  icon: string;
  date: string;
  points: string[];
}
interface CardAboutProps {
  item: VerticalItem;
}

const ExCard = ({ item }: CardAboutProps) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: item.iconBg, color: "#fff" }} 
    contentArrowStyle={{ borderRight: `7px solid ${item.iconBg}` }}
    date={item.date}
    iconStyle={{ background: item.iconBg, color: "#fff" }}
    icon={<img 
            src={item.icon} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', borderRadius: '50%' }} 
          />}
  >
    <h3 className="vertical-timeline-element-title">{item.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.company_name}</h4>
    <ul className="list-disc ml-5 mt-2"> 
      {item.points.map((point, index) => (
        <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <ExCard key={index} item={item}/>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
