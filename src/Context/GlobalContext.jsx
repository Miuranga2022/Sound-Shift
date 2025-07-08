import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const GlobalState = createContext(null);

function GlobalContext({ children }) {
  const [playlist, setPlaylist] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("music-playlist");
    return stored ? JSON.parse(stored) : [];
  });

  // Update localStorage whenever playlist changes
  useEffect(() => {
    localStorage.setItem("music-playlist", JSON.stringify(playlist));
  }, [playlist]);

  const togglePlaylist = (track) => {
    const exists = playlist.find((t) => t.id === track.id);

    if (exists) {
      setPlaylist(playlist.filter((t) => t.id !== track.id));
      toast.error("Removed from playlist!", { duration: 1000 });
    } else {
      setPlaylist([...playlist, track]);
      toast.success("Added to the playlist!", { duration: 1000 });
    }
  };

  return (
    <GlobalState.Provider value={{ playlist, setPlaylist, togglePlaylist }}>
      {children}
    </GlobalState.Provider>
  );
}

export default GlobalContext;
