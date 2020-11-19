import React from 'react';
import getEmojis from '../api/emojis';
import { useQuery } from 'react-query';

const Counter = () => {
    const { isLoading, error, data } = useQuery('emojis', getEmojis);

    if (isLoading) {        
        return (<span className="counter">loading ...</span>)
    }
    
    
    if (error) return "Wooops! " + error.message;

    return (
        <span className="counter">{data.length}</span>
    )
}

export { Counter as default };