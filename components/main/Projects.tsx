import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="relative z-30 flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Update Wordpress site"
          description={
            <span>
              Changes made to the website to improve performance, add Google Analytics, and update the homepage.{" "}
              <a
                href="https://lovetoprint.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-gray-100 no-underline"
              >
                Check the site
              </a>
            </span>
          }
        />
        <ProjectCard
          src="/CardImage.png"
          title="Creating Wordpress Plugin With PHP"
          description="A plugin for collecting user information, admin verification, email notification to the users displaying verified user data on a map."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Building Portfolios"
          description={
            <span>
              Developed a simple, responsive portfolio website using Bootstrap to showcase my projects. Focused on clean design, mobile-friendly layouts, and ease of navigation.{" "}
              <a
                href="https://lekasdimitrios.000.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-gray-100 no-underline"
              >
                Check the site
              </a>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
