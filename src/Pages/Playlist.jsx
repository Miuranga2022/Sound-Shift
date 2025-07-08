import { useContext, useState } from "react";
import { GlobalState } from "../Context/GlobalContext";
import Trackcard from "../Components/Trackcard";
import { useNavigate } from "react-router";
import SongModal from "../Components/SongModel";


function Playlist() {
  const { playlist } = useContext(GlobalState);
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState(null);

  const openModal = (track) => setSelectedTrack(track);
  const closeModal = () => setSelectedTrack(null);

  return (
    <div className="flex flex-col min-h-screen"> {/* 🔥 wrapper with full height */}
      <div className="flex-grow">
        {playlist.length === 0 ? (
          <div className="max-w-[1440px] min-h-[600px] mx-auto flex flex-col justify-center items-center mt-24">
            <div className="text-center flex flex-col justify-center items-center py-10 text-white">
              <h2 className="text-2xl font-bold mb-2">Your playlist is empty</h2>
              <p className="text-gray-400 mb-4">
                Start adding songs to enjoy your music journey 🎵
              </p>
              <button
                onClick={() => navigate("/browse")}
                className="bg-green-500 text-black px-4 py-2 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Browse Music
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto mt-24">
            {playlist.map((track) => (
              <Trackcard
                key={track.id}
                track={track}
                onClick={() => openModal(track)}
              />
            ))}
          </div>
        )}
      </div>

      {/* 🎵 Sticky Footer at the bottom */}

      {selectedTrack && <SongModal track={selectedTrack} onClose={closeModal} />}
    </div>
  );
}

export default Playlist;
