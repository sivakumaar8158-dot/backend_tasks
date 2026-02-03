import { useState, useMemo } from 'react';

const useFilterByCategory = (items, categoryProp) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const uniqueCategories = new Set(items.map((item) => item[categoryProp]));
        return ['All', ...Array.from(uniqueCategories)];
    }, [items, categoryProp]);

    const filteredItems = useMemo(() => {
        if (selectedCategory === 'All') return items;
        return items.filter((item) => item[categoryProp] === selectedCategory);
    }, [items, selectedCategory, categoryProp]);

    return { selectedCategory, setSelectedCategory, categories, filteredItems };
};

export default useFilterByCategory;
