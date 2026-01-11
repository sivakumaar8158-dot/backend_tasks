import PropTypes from 'prop-types';

const UserCard =({ name, age, city, isAdmin }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
      <h3>User Card</h3>
      <p>
        Hi <strong>{name}</strong>, {age} years old from {city}.
      </p>
      {isAdmin && (
        <span style={{ 
          backgroundColor: '#ffc107', 
          padding: '4px 8px', 
          borderRadius: '4px', 
          fontWeight: 'bold',
          fontSize: '0.8em' 
        }}>
          Admin
        </span>
      )}
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

UserCard.defaultProps = {
  isAdmin: false,
};

export default UserCard;
