import useFetch from './useFetch';

const useFetchProducts = () => {
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products?limit=6');
    return { products: data, loading, error };
};

export default useFetchProducts;
