export default function Seats({ seats }) {
  return (
    <div>
      {seats.map(seat => (
        <button key={seat._id}>
          {seat.seatNumber}
        </button>
      ))}
    </div>
  );
}
