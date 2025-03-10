import React from "react";

export default function DishCard({ project }) {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2"
        loading="lazy"
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
