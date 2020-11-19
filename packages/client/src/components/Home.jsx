import React, { useState, useEffect } from 'react';
import getEmojis from '../api/emojis';
import { useQueryCache } from 'react-query';

const Home = () => {
    const [count, setCount] = useState(0);
    const queryCache = useQueryCache();

    useEffect(() => {
        const prefetchTodos = async () => {
            console.log("hitting prefech todos")
            await queryCache.prefetchQuery('emojis', getEmojis )        
        }
        prefetchTodos();
    }, []);    

    return (
        <div>
            <h2>Github Emojis {count}</h2>
            <button onClick={()=> {setCount((prevState)=> prevState + 1)}}>+1</button>
        </div>
    )
};

export { Home as default };
