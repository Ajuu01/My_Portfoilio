import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-50">

      <h2 className="text-3xl font-extrabold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-6 bg-white rounded-2xl shadow-md border"
            whileHover={{ scale: 1.05, y: -8 }}
          >

            <h3 className="font-bold text-xl">{project.title}</h3>

            <p className="text-gray-500 mt-2">{project.desc}</p>

            {/* BUTTONS */}
            <div className="mt-4 flex gap-3">

              {/* View Details (internal page) */}
              <Link
                to={`/project/${project.id}`}
                className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
              >
                View Details
              </Link>

              {/* GitHub (external link) */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
              >
                GitHub ↗
              </a>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}