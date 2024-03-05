"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

interface Props {
  title: string;
  id: string;
  content: React.JSX.Element;
}

const TAB_DATA: Props[] = [
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <div className="text-xl flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold w-24">Frontend:</p>
          <span>
            ReactJs | NextJs | React Native | Typescript | Redux Toolkit |
            Javascript | Tailwind | HTML | CSS
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold w-24">Backend:</p>
          <span>NodeJs | Express | NestJs | JWT</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold w-24">Database:</p>
          <span>MongoDB | PostgreSQL | MySQL</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold w-24">Other:</p>
          <span>React Testing Library | Github | Trello | Jira</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-xl flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold">{"Bachelor's Degree in Computer Science"}</p>
          <span className="text-gray">
            XXI Century University | Jul 2022 - present
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold">Fullstack Developer</p>
          <span className="text-gray">
            Henry Bootcamp | Dec 2021 - Jun 2022
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold">Web Developer</p>
          <span className="text-gray">
            Coderhouse Institute | Aug 2021 - Dec 2022
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <div className="md:grid md:grid-cols-2 gap-4 w-full">
        <div>
          <ul className="pl-2 font-bold text-xl">
            <li>- Teamwork</li>
            <li>- Multitasking</li>
            <li>- Attention to detail</li>
            <li>- Adaptability</li>
            <li>- Self-learning</li>
            <li>- Effective communication</li>
          </ul>
        </div>
        <div>
          <ul className="pl-2 font-bold text-xl">
            <li>- Collaboration</li>
            <li>- Results-oriented</li>
            <li>- Critical thinking</li>
            <li>- Problem-solving</li>
            <li>- Agile mindset</li>
            <li>- Organizational skills</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("technologies");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className=" gap-8 items-center py-8 xl:gap-16 sm:py-16 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-start mt-8 text-md sm:text-2xl">
            <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              {" "}
              Technologies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft-skills")}
              active={tab === "soft-skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)!.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
