import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectListing() {
  const PROJECTS = [
    {
      name: "Personal Website",
      image: "personal_site.png",
      technologies: ["NextJS", "Tailwind"],
      description:
        "This is my personal website that I made from the design to the code, using figma and modern frontend technologies mentioned above.",
      url: "https://mahdibeldjoudi.xyz/",
    },

    {
      name: "Personal Blog",
      image: "personal_blog.png",
      technologies: ["NextJS", "Tailwind", "Sanity"],
      description:
        "For the perpose of sharing my journey and to ace my communication skills I decided to start blogging. Using the same design spirit as my personal website I made this JAMstack website from the ground.",
      url: "https://blog.mahdibeldjoudi.xyz/",
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
        />
      ))}
    </>
  );
}
