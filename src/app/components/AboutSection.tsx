"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Experience from "./Experience";

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
          <p className="font-bold">Software Engineer</p>
          <span className="text-gray">Arol.Dev Mentorship | 2024</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold">{"Bachelor's Degree in Computer Science"}</p>
          <span className="text-gray">
            University Siglo XXI (Argentina) | 2022 - present
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 mb-2 ">
          <p className="font-bold">Web Developer</p>
          <span className="text-gray">Coderhouse Institute | 2021 - 2022</span>
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
    <>
      <section className="text-white" id="about">
        <div className=" gap-8 items-center py-8 xl:gap-16 sm:py-16 ">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am Tomas, a creative and passionate Software Engineer with a
              solid experience in web application development and business
              logistics. I excel in creating innovative solutions that drive
              business success and enhance user experience.
              <br /> I am passionate about working in collaborative teams and
              using the latest tools and techniques to deliver exceptional
              results! I am always seeking new challenges where I can apply my
              skills and contribute to project success. Feel free to reach out
              to me for collaboration or networking opportunities.
            </p>
            <div>
              <Experience />
            </div>
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
    </>
  );
};

export default AboutSection;
