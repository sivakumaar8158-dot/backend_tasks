import React, { useState, useCallback, memo } from 'react';


const ListItem = memo(({ item, onDelete }) => {
    console.log(`ListItem ${item.id} Rendered`);
    return (
        <li className="list-item">
            <span>{item.name}</span>
            <button
                className="delete-btn"
                onClick={() => onDelete(item.id)}
            >
                ✕
            </button>
        </li>
    );
});

ListItem.displayName = 'ListItem';

const ItemsList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Premium Widget' },
        { id: 2, name: 'Deluxe Gadget' },
        { id: 3, name: 'Super Tool' },
        { id: 4, name: 'Micro Chip' },
    ]);

    
    const deleteItem = useCallback((id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, []);
    

    return (
        <div className="card">
            <div className="card-header">
                <h3>Optimized List</h3>
                <span className="badge">{items.length} Items</span>
            </div>
            <ul className="custom-list">
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        onDelete={deleteItem}
                    />
                ))}
            </ul>
            <p className="hint">Deleting one item won't re-render others.</p>
        </div>
    );
};

export default ItemsList;
