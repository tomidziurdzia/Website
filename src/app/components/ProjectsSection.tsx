"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Fleet Manager",
    description: `
    Developed and designed a customized web platform for comprehensive fleet management and employee data tracking.
    Implemented features for schedule tracking, task assignment, and report generation.
    `,
    image: "/images/fleet-manager.png",
    gitUrlClient: "https://github.com/tomidziurdzia/JouveManagement-Client",
    gitUrlServer: "https://github.com/tomidziurdzia/JouveManagement-Server",
    previewUrl: "https://jouve-management-client.vercel.app/",
  },
  {
    id: 2,
    title: "Drivers Manager",
    description: `
    Created a comprehensive web application for controlling expenses of delivery riders.
    Designed and developed an intuitive interface allowing drivers to input and categorize their daily expenses.
    `,
    image: "/images/driver-manager.png",
    gitUrlClient: "https://github.com/tomidziurdzia/driversManager_frontend",
    gitUrlServer: "https://github.com/tomidziurdzia/driversManager_backend",
    previewUrl: "https://drivers-manager.vercel.app/",
  },
  {
    id: 3,
    title: "Project Management",
    description: `
    Developed a project tracking web application similar to Jira and Trello.
    Created an interface that allows the admin user to easily insert collaborators for subsequent task control.
    `,
    image: "/images/projects-manager.png",
    gitUrlClient: "https://github.com/tomidziurdzia/projectsManager_frontend",
    gitUrlServer: "https://github.com/tomidziurdzia/projectsManager_backend",
    previewUrl: "https://projects-manager.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrlClient={project.gitUrlClient}
              gitUrlServer={project.gitUrlServer}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
