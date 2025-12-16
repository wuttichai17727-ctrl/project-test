import React from "react";
import { services} from '../data/ExampleData'

interface servicesItem {
  title:string;
  image: string;
}
interface CardAboutProps {
  item: servicesItem;
}
const CardAbout = ({ item }: CardAboutProps) => {
    return (
   

<div className="xs:w-[250px] bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <a href="#">
        <img style={{width:'100%',height:'150px'}}
        className="rounded-base" src={item.image} alt={item.title} />
    </a>
    <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{item.title}</h5>
    </a>
    <p className="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
    <a href="#" className="inline-flex items-center text-body bg-sky-500/100 ... box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Read more
        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </a>
</div>

    )
}

const About = () => {
  return (
    <div className="about-head">
      <div className="sectionSubText">Introduction</div>
      <h2 className="sectionHeadText">Overview</h2>

      <div className="about-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy.
      </div>
      <div className="cardText mt-10 flex flex-warp gap-10">
        {services.map((item, index) => 
            <CardAbout key={index} item={item}/>
        )}
        
      </div>
    </div>
  );
};

export default About;
