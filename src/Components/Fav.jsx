import { useContext } from "react";
import { GlobalState } from "../Context/GlobalContext";
import { HeartIcon } from "lucide-react";
export default function Fav({ track, onClick }) {
  const { playlist, togglePlaylist } = useContext(GlobalState);
  const isinPlaylist = playlist.some((song) => song.id === track.id);

  return (
    <div className="bg-base-200 rounded-xl shadow-md p-4 flex flex-col items-center justify-between hover:shadow-xl transition-shadow h-full hover:border cursor-pointer">
      <img
        src={track.artwork['150x150']}
        alt={track.title}
        className="w-full h-full object-cover rounded-lg mb-3"
      />

      <div className="w-full text-center">
        <h3 className="text-sm font-semibold truncate">
          {track.title.length > 30 ? track.title.slice(0, 30) + "..." : track.title}
        </h3>
        <p className="text-xs text-gray-500 truncate">
          {track.user?.name || "Unknown Artist"}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between w-full">
        <button onClick={() => togglePlaylist(track)}>
          {isinPlaylist ? <HeartIcon fill="red" /> : <HeartIcon />}
        </button>
        <button onClick={onClick} className="btn btn-sm btn-primary">
          Listen
        </button>
      </div>
    </div>
  );
}
