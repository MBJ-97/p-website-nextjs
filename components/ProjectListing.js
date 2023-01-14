import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectListing() {
  const PROJECTS = [
    {
      name: "Vectorz",
      image: "vectorz.png",
      technologies: ["Web Design", "NextJS", "Tailwind"],
      description:
        "Vectorz is a logistics company. We had the chance to make their website from design to deployment. Simple and fast website those are the requirements of our clients. Check it we would like to have your thoughts on it !",
      url: "https://vectorz-dz.com/",
    },
  ];
  return (
    <>
      {PROJECTS.map((i) => (
        <ProjectItem
          key={i}
          name={i.name}
          description={i.description}
          techs={i.technologies}
          image={i.image}
          url={i.url}
        />
      ))}
    </>
  );
}
