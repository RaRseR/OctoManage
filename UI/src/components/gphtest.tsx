import { useQuery, gql, NetworkStatus } from '@apollo/client';

const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            code
            name
            emoji
        }
    }`;

export default function GPHTEST() {
    const { loading, error, data, refetch, networkStatus } = useQuery(GET_COUNTRIES, { pollInterval: 0, notifyOnNetworkStatusChange: true });

    if (networkStatus === NetworkStatus.refetch) return <p className='text-white'>Refetching!</p>;
    if (loading) return <p className='text-white'>Loading...</p>;
    if (error) return <p className='text-white'>Error : {error.message}</p>;

    return <div className='text-white'>
        <button onClick={() => refetch()}>refetch</button>
        {data.countries.map(({ code, name, emoji, id }: any) => (
            <div key={id}>
                <h3>{code}</h3>
                <p>{emoji}</p>
                <p>{name}</p>
            </div>
        ))}</div>
}

function CODE({ code }: any) {
    return
}