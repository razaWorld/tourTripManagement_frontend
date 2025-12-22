import { useEffect, useState } from "react";
import API from "../../api/api";

export default function Vote() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    API.get("/vote/places").then(res => setPlaces(res.data));
  }, []);

  const vote = async (placeId) => {
    await API.post("/vote/vote", { placeId });
    alert("Vote submitted");
  };

  return (
    <div>
      <h2>Vote Place</h2>
      {places.map(p => (
        <div key={p._id}>
          <span>{p.name}</span>
          <button onClick={() => vote(p._id)}>Vote</button>
        </div>
      ))}
    </div>
  );
}
