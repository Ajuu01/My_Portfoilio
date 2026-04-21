import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 overflow-hidden bg-white">

      {/* 🌈 Animated background blobs */}
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      {/* Floating Profile */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="z-10"
      >
        <motion.img
          src={profile}
          alt="profile"
          className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mt-6 text-gray-800 z-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Hi, I'm Ajuna Rai👋
      </motion.h1>

      {/* ✨ Typewriter Role */}
      <motion.p
        className="mt-3 text-lg md:text-xl text-gray-500 z-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <Typewriter
          words={[
            "MERN Stack Developer",
            "React Enthusiast",
            "Backend Builder"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* Description */}
      <motion.p
        className="mt-4 max-w-md text-gray-600 leading-relaxed z-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        I build modern, responsive, and scalable web applications with clean UI and smooth user experience.
      </motion.p>

      {/* 🔥 Magnetic Buttons */}
      <motion.div
        className="mt-6 flex gap-4 z-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <motion.a
          href="projects"
          className="px-6 py-2 bg-gray-900 text-white rounded-full"
          whileHover={{
            scale: 1.1,
            x: 5,
            boxShadow: "0px 15px 30px rgba(0,0,0,0.25)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>

        <motion.a
          href="contact"
          className="px-6 py-2 border border-gray-400 rounded-full"
          whileHover={{
            scale: 1.1,
            x: -5,
            backgroundColor: "#f3f4f6"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>

    </section>
  );
}