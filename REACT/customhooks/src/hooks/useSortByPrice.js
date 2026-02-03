import { useState, useMemo } from 'react';

const useSortByPrice = (items, priceProp) => {
    const [sortOrder, setSortOrder] = useState('none'); // 'none', 'asc', 'desc'

    const sortedItems = useMemo(() => {
        if (sortOrder === 'none') return items;

        const sorted = [...items];
        sorted.sort((a, b) => {
            if (sortOrder === 'asc') return a[priceProp] - b[priceProp];
            return b[priceProp] - a[priceProp];
        });
        return sorted;
    }, [items, sortOrder, priceProp]);

    return { sortOrder, setSortOrder, sortedItems };
};

export default useSortByPrice;
