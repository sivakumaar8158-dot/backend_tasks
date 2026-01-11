

export default function UserCard({ name, age, city, isAdmin }) {
  return (
    <div>
      <p>Hi {name}, {age} years old from {city}</p>

      {isAdmin && <span style={{ color: "red" }}>Admin</span>}
    </div>
  );
}
