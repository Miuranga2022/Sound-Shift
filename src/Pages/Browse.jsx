import { useEffect, useState } from "react";
import SongRow from "../Components/SongRow";
import SongModal from "../Components/SongModel";

export default function Browse() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const [popular, setPopular] = useState([]);
  const [electronic, setElectronic] = useState([]);
  const [hiphop, setHiphop] = useState([]);
  const [pop, setPop] = useState([]);
  const [rock, setRock] = useState([]);
  const [jazz, setJazz] = useState([]);
  const [country, setCountry] = useState([]);
  const [classical, setClassical] = useState([]);
  const [loading,setLoading] = useState(false)

  const openModal = (track) => setSelectedTrack(track);
  const closeModal = () => setSelectedTrack(null);

  useEffect(() => {
    const fetchData = async () => {
      const get = async (url) => {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        return data.data;
      };

      setPopular(await get(`https://api.audius.co/v1/tracks/trending?limit=20`));
      setElectronic(await get(`https://api.audius.co/v1/tracks/trending?genre=Electronic&limit=20`));
      setHiphop(await get(`https://api.audius.co/v1/tracks/search?genre=Hip-Hop%2FRap&limit=20`));
      setPop(await get(`https://api.audius.co/v1/tracks/search?genre=Pop&limit=20`));
      setRock(await get(`https://api.audius.co/v1/tracks/search?genre=Rock&limit=20`));
      setJazz(await get(`https://api.audius.co/v1/tracks/search?genre=Jazz&limit=20`));
      setCountry(await get(`https://api.audius.co/v1/tracks/search?genre=Country&limit=20`));
      setClassical(await get(`https://api.audius.co/v1/tracks/search?genre=Classical&limit=20`));
    };

    fetchData();
  }, []);

  return (
    <>
      <SongRow title="Popular Songs" tracks={popular} onTrackClick={openModal} />
      <SongRow title="Electronic Songs" tracks={electronic} onTrackClick={openModal} />
      <SongRow title="Hip-Hop Songs" tracks={hiphop} onTrackClick={openModal} />
      <SongRow title="Pop Songs" tracks={pop} onTrackClick={openModal} />
      <SongRow title="Rock Songs" tracks={rock} onTrackClick={openModal} />
      <SongRow title="Jazz Songs" tracks={jazz} onTrackClick={openModal} />
      <SongRow title="Country Songs" tracks={country} onTrackClick={openModal} />
      <SongRow title="Classical Songs" tracks={classical} onTrackClick={openModal} />

      {selectedTrack && <SongModal track={selectedTrack} onClose={closeModal} />}
    </>
  );
}
