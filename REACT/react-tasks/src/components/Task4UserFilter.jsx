import { useState } from 'react';
import PropTypes from 'prop-types';

// Child Component
const UserDetail=({ user, isSelected, onSelect }) => {
    return (
        <div style={{
            border: isSelected ? '2px solid blue' : '1px solid #ddd',
            padding: '10px',
            margin: '5px',
            backgroundColor: isSelected ? '#e6f0ff' : 'white'
        }}>
            <h4>{user.name}</h4>
            <p>Email: {user.email}</p>
            <button onClick={() => onSelect(user.id)}>
                {isSelected ? 'Selected' : 'Select User'}
            </button>
        </div>
    );
}

UserDetail.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};

// Parent Component
function UserList({ users, selectedUserId, onUserSelect }) {
    return (
        <div>
            <h4>User List (Parent)</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
                {users.map(user => (
                    <UserDetail
                        key={user.id}
                        user={user}
                        isSelected={selectedUserId === user.id}
                        onSelect={onUserSelect}
                    />
                ))}
            </div>
        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })).isRequired,
    selectedUserId: PropTypes.number,
    onUserSelect: PropTypes.func.isRequired,
};

// Grandparent Component
function UserFilterApp() {
    const [selectedUserId, setSelectedUserId] = useState(null);

    const users = [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
    ];

    const handleUserSelect = (id) => {
        setSelectedUserId(id);
    };

    return (
        <div>
            <h3>Task 4: Multi-Level Props (Grandparent -&gt; Parent -&gt; Child)</h3>
            <p>Selected User ID: {selectedUserId || 'None'}</p>
            <UserList
                users={users}
                selectedUserId={selectedUserId}
                onUserSelect={handleUserSelect}
            />
        </div>
    );
}

export default UserFilterApp;
