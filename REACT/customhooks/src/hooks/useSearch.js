import { useState, useMemo } from 'react';

const useSearch = (items, searchProp) => {
    const [query, setQuery] = useState('');

    const filteredItems = useMemo(() => {
        if (!query) return items;
        return items.filter((item) =>
            item[searchProp].toLowerCase().includes(query.toLowerCase())
        );
    }, [items, query, searchProp]);

    return { query, setQuery, filteredItems };
};

export default useSearch;
