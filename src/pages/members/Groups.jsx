export default function Groups({ groups }) {
  return (
    <div>
      {groups.map(g => (
        <div key={g._id}>
          <h4>{g.groupName}</h4>
          <p>Members: {g.members.length}</p>
        </div>
      ))}
    </div>
  );
}
