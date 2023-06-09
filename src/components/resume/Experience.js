import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2023
</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="2021-2023 – Present"
            subTitle="MERN Stack Developer"
            result="Islamabad"
            des="
            With 2+ years of experience as a MERN stack developer, I possess a deep understanding of front-end and backend technologies. Collaborating on diverse projects with large teams, I have utilized React.js for the client-side, Node.js/Express for the server-side, and MongoDB/SQL for databases. Implementing REST APIs with JWT and Express in Node, I have honed my expertise in Redux, including state store, middleware, action creators, and reducers. Proficient in HTML, I have seamlessly converted Figma designs into React templates, ensuring pixel-perfect layouts across devices through CSS, SCSS, and SASS with knowledge of CSS frameworks and libraries."
          />
          <ResumeCard
            title="2020 – 2021"
            subTitle="Web Designer / SEO"
            result="Islamabad"
            des="With experience as a front-end developer, I've worked on multiple websites, implementing advanced design techniques to enhance user experience. Alongside, I have expertise in utilizing on-page and off-page SEO techniques, including backlinking, to improve the rankings of various websites. As an SEO expert, I have conducted thorough keyword research and traffic analysis to drive targeted organic traffic. Furthermore, I have contributed engaging and informative content to diverse blogging platforms, enhancing brand visibility and attracting readers. Through my combined skills in front-end development, SEO, and content creation, I have successfully played a key role in optimizing websites for both aesthetic appeal and search engine visibility."
          />
          <ResumeCard
            title="2019 - 2020"
            subTitle="Web Designer "
            result="Muzaffarbad"
            des=" I gained hands-on experience creating interactive user interfaces using HTML and CSS. I honed my skills in advanced CSS design techniques, enabling me to craft visually appealing and engaging web experiences. Additionally, I familiarized myself with website development using content management systems (CMS) like WordPress. This involved learning the fundamentals of creating websites using WordPress, understanding its functionalities, and leveraging its features for efficient website building. The combination of working on interactive UIs, mastering advanced CSS design, and acquiring knowledge of CMS-based website development has equipped me with a versatile skill set in front-end development. I am now proficient in creating captivating user interfaces and adept at utilizing CMS platforms to streamline the website creation process."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 – 2021</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="NAVTTC"
            subTitle="Full Stack Development Course"
            result="Air University, Islamabad."
            des="I learned JS CRUD operations, developed a Social Media app, a Books Management Store app in React and Node.js, and worked on various projects including a stopwatch, news app, movies website, and a simple game app."
          />
          {/* <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
