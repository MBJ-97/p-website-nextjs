import React from "react";
import ProjectListing from "./ProjectListing";

export default function WorkSection() {
  return (
    <div id="projects" className="mb-32">
      <h2 className="text-2xl md:text-4xl font-semibold my-10">Work</h2>

      <div className="mx-auto text-center">
        <ProjectListing />
      </div>
    </div>
  );
}
