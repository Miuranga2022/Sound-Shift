import { useEffect, useState } from 'react';
import Trackcard from '../Components/Trackcard';
import SongModal from '../Components/SongModel';
import { RingLoader } from 'react-spinners';
import Hero from '../Components/Hero';

export default function HomePage() {
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isloading, setLoading] = useState(false);

  const fetchTracksFromAPI = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.audius.co/v1/tracks/search?query=${query}&limit=30`);
      const data = await res.json();
      setTracks(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTracksFromAPI();
  };

  useEffect(() => {
    fetchTracksFromAPI();
  }, []);

  const openModal = (track) => setSelectedTrack(track);
  const closeModal = () => setSelectedTrack(null);

  return (
    <div className="p-4 relative min-h-screen">
      <section className="mb-6 text-center">
        <Hero />
        <form onSubmit={handleSubmit} className='mt-8'>
          <input
            type="text"
            placeholder="Search your vibe..."
            className="input input-bordered w-full max-w-md text-white placeholder-gray-400 bg-base-200 border border-violet-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </section>

      {isloading && (
        <div className="w-full mt-20 flex items-center justify-center">
          <RingLoader color='gold' size={150} />
        </div>
      )}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-10 ">
        {tracks.map((track) => (
          <div key={track.id}>
            <Trackcard track={track} onClick={() => openModal(track)} />
          </div>
        ))}
      </section>

      {selectedTrack && <SongModal track={selectedTrack} onClose={closeModal} />}
    </div>
  );
}
