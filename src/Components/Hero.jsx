import { motion } from "framer-motion";
import { Link } from "react-router";
export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" mt-24 text-center w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 "
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-3 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        🎵 Discover Music That Moves You 🎵
      </motion.h1>

      <motion.p
        className="text-gray-200 max-w-md mx-auto text-md sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Explore trending tracks, save your favorites, and stream effortlessly.
      </motion.p>

      <motion.button
        className="btn btn-primary mt-6 px-10 font-serif text-lg"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400 }}
      
      >
       <Link to='/browse'> Get Started</Link>
      </motion.button>
    </motion.section>
  );
}
