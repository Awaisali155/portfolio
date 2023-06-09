import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of AJK (2016 - 2020)"
            result="3.01/4"
            des="Bachelor's in Computer Science: Strong programming skills, problem-solving abilities, software development knowledge, and effective teamwork experience."
          />
          <ResumeCard
            title="Intermediate in Computer Science"
            subTitle="Spring field school and college (2013 - 2015)"
            result="A Garade"
            des="Intermediate in Computer Science: Built solid programming foundation, problem-solving skills, and understanding of computer systems for future studies."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Spring field school and college (2011 - 2013)"
            result="A Garade"
            des=" Acquired strong foundational knowledge, critical thinking skills, and a solid academic base for further educational pursuits."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack Developerr"
            subTitle="CloudTek - (2021 - Present)"
            result="Islamabad"
            des="Experienced MERN stack developer adept in front-end and back-end technologies. Skilled in React.js, Node.js/Express, MongoDB/SQL, REST APIs, Redux, HTML, CSS, and responsive design."
          />
          <ResumeCard
            title="Web Designer / SEO"
            subTitle="Apple Developer Team - (2020 - 2021)"
            result="Wasila.AE l Main Commercial Markeet, Islamabad"
            des="Experienced front-end developer with expertise in advanced designing techniques. Proficient in SEO techniques, backlinking, content writing, keyword research, and traffic analysis."
          />
          <ResumeCard
            title="Web Designer Intern"
            subTitle="Maxcore Technologies - (2019 - 2020)"
            result="Muzaffarbad"
            des="Created Interactive user interfaces in HTML and CSS, while working as an internee
            Learned advanced designing using CSS.
            Learned about creating websites using CMS like WordPres"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education