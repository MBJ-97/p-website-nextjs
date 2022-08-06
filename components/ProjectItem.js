import React from "react";
import Image from "next/image";
import myPhoto from "../public/images/project.png";
import Button from "./Button";

export default function ProjectItem({ name, description, techs, image, url }) {
  return (
    <>
      <div className="md:flex items-center mb-10">
        <div className="project-image px-3 md:px-0 w-full md:w-1/3 mr-4">
          <Image src={`/images/projects/${image}`} width={350} height={250} />
        </div>
        <div className="project-details w-full md:w-2/3 flex flex-col text-left">
          <h3 className="text-2xl font-medium">{name}</h3>
          {/* here comes a map */}
          <div className="flex space-x-2 mb-4 mt-2">
            {techs.map((i) => (
              <div
                key={i}
                className="h-8 rounded-full bg-gradient-to-r from-accent via-blue to-purple p-1"
              >
                <div className="w-full bg-white dark:bg-black rounded-full text-xs py-1 px-2">
                  {i}
                </div>
              </div>
            ))}
          </div>
          <p>{description}</p>
          <Button
            href={url}
            additionalStyle="w-full md:w-1/3 mt-7 transition ease-in-out delay-250 hover:translate-x-2"
            bgColor="bg-accent"
            txtColor="text-white"
            text="🌏 Check it"
          />
        </div>
      </div>
    </>
  );
}
