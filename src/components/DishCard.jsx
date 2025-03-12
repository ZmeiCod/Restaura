import React from "react";

export default function DishCard({ project }) {
  return (
    <div className="justify-center items-center text-center">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2 w-96 m-auto"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
}
