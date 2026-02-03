import useFetch from './useFetch';

const useFetchUsers = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users?limit=4');
    return { users: data, loading, error };
};

export default useFetchUsers;
