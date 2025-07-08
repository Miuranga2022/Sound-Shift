import { useContext, useRef } from "react";
import { GlobalState } from "../Context/GlobalContext";
import { HeartIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Trackcard({ track, onClick }) {
  const { playlist, togglePlaylist } = useContext(GlobalState);
  const isinPlaylist = playlist.some((song) => song.id === track.id);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
initial={{ opacity: 0, x: -50 }}
animate={inView ? { opacity: 1, x: 0 } : {}}
transition={{ duration: 0.5, ease: "easeOut" }}
      className="card card-side bg-base-100 shadow-xl rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
    >
      <figure>
        <img
          className="rounded-xl"
          src={track.artwork['150x150']}
          alt={track.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm truncate">
          {track.title.length > 20 ? track.title.slice(0, 30) + ' ...' : track.title}
        </h2>
        <p className="text-sm text-gray-500">{track.user?.name || 'Unknown Artist'}</p>
        <div className="card-actions flex justify-between items-center">
          <button onClick={() => togglePlaylist(track)}>
            {isinPlaylist ? <HeartIcon fill="red" /> : <HeartIcon />}
          </button>
          <button onClick={onClick} className="btn btn-primary">Listen Now</button>
        </div>
      </div>
    </motion.div>
  );
}
