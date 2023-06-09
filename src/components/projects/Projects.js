import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectThree,movies,eCommerce,newsWebite ,adminPanel} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = ({data}) => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      {data}
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Developed a React-based social media clone with user profiles, news feeds, and interactive posts, demonstrating strong frontend development skills."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Crafted a modern eCommerce website with seamless shopping experience, secure payments, and advanced features using cutting-edge technologies."
          src={eCommerce}
        />
        <ProjectsCard
          title="Chatting App"
          des="Engineered a dynamic chatting app with real-time messaging, user authentication, and intuitive UI, leveraging modern technologies for seamless communication."
          src={projectThree}
        />
        <ProjectsCard
          title="Movies Website"
          des="Created a captivating movies website with a sleek design, extensive movie database, and user-friendly interface, delivering an immersive cinematic experience."
          src={movies}
        />
        <ProjectsCard
          title="News Website "
          des="Developed a dynamic news website with real-time updates, intuitive navigation, and engaging content presentation, delivering timely and reliable news to users."
          src={newsWebite}
        />
        <ProjectsCard
          title="Admin Panel"
          des="Created a ReactJS admin panel with intuitive interface and advanced data management, enabling efficient administrative tasks and control."
          src={adminPanel}
        />
      </div>
    </section>
  );
}

export default Projects