import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="p-10">
        <h2 className="text-xl font-bold text-red-500">
          Project not found
        </h2>
        <Link to="/projects" className="text-blue-500 mt-4 inline-block">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-50">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
        {project.title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
        {project.desc}
      </p>

      {/* Info card */}
      <div className="mt-8 p-6 bg-white rounded-2xl shadow-md border max-w-2xl">
        <h3 className="font-bold text-lg mb-2">About this project</h3>
        <p className="text-gray-600">
          This project demonstrates real-world development using modern web technologies. It focuses on scalability, performance, and clean UI design.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
        >
          View on GitHub ↗
        </a>

        {/* Back button */}
        <Link
          to="/projects"
          className="px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
        >
          ← Back
        </Link>

      </div>

    </section>
  );
}