import { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon() {
    const [id, setId] = useState(1)
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handlePreviousId = () => setId(prevId => Math.max(prevId - 1, 1))
    const handleNextId = () => setId(prevId => prevId + 1)
    
    if (loading) return <div>loading ...</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            <div>ID: {data?.id}</div>
            <div>Name: {data?.name}</div>
            <div>Weight: {data?.weight}</div>
            <div>
                <img src={data?.sprites.front_default} alt="front" ></img>
                <img src={data?.sprites.back_default} alt="back"></img>
            </div>
            <button onClick={handlePreviousId} style={{ marginLeft : 10 }}>Previous</button>
            <button onClick={handleNextId} style={{ marginLeft: 10 }}>Next</button>
        </div>
    )
}