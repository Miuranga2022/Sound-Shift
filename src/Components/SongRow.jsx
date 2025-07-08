import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RingLoader } from "react-spinners";
import Fav from "./Fav";

export default function SongRow({ title, tracks, onTrackClick }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollLeft += amount;
  };

  return (
    <div className="relative mb-10 mt-24 ">
      <h2 className=" text-2xl font-bold mb-3 ml-4  font-serif tracking-wide text-white ">{title}</h2>
      {tracks.length === 0 ? (
        <div className="flex justify-center items-center h-[150px] ">
          <RingLoader color="gold" size={60} />
        </div>
      ) : (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="custom-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-4"
          >
            {tracks.map((track) => (
              <div key={track.id} className="min-w-[150px] bg-red-600 mt-4 mb-3">
                <Fav track={track} onClick={() => onTrackClick(track)} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
