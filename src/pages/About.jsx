import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-linear-to-b from-white to-gray-50">

      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-gray-800"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
      >
        About Me
      </motion.h2>

      {/* Line separator */}
      <div className="w-16 h-1 bg-blue-400 mt-3 rounded-full"></div>

      {/* Description */}
      <motion.p
        className="mt-6 text-gray-600 leading-relaxed max-w-2xl text-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
      >
        I’m a passionate Full Stack Developer who enjoys building modern,
        responsive, and scalable web applications. I specialize in React,
        Node.js, and PostgreSQL, and I love turning ideas into real-world
        digital products.
      </motion.p>

      {/* Skills cards */}
      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={3}
      >

        <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-lg">Frontend</h3>
          <p className="text-gray-500 mt-2">React, Tailwind, UI Design</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-lg">Backend</h3>
          <p className="text-gray-500 mt-2">Node.js, Express APIs</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-lg">Database</h3>
          <p className="text-gray-500 mt-2">PostgreSQL, MongoDB</p>
        </div>

      </motion.div>

    </section>
  );
}