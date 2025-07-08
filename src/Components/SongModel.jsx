import { X } from "lucide-react";

export default function SongModal({ track, onClose }) {
  const audioSrc = `https://discoveryprovider3.audius.co/v1/tracks/${track.id}/stream`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/20"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full shadow-md"
        >
          <X size={18} />
        </button>

        {/* Artwork */}
        <img
          src={track.artwork?.['480x480']}
          alt={track.title}
          className="rounded-lg w-full object-cover mb-4"
        />

        {/* Track Info */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-white">{track.title}</h2>
          <p className="text-sm text-gray-200">
            {track.user?.name || "Unknown Artist"}
          </p>
        </div>

        {/* Audio Player */}
        <div className="bg-white/20 backdrop-blur-md rounded-md p-2">
          <audio
            controls
            autoPlay
            src={audioSrc}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
