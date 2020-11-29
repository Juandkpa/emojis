import { useEffect } from 'react';
import { useQueryCache } from 'react-query';
import socketIOClient from "socket.io-client";
const topics = [{topic:'welcome', relatedQueries: []}, {topic: 'newEmoji', relatedQueries: ['emojis']}];


const useSocketIO = () => {    
    const queryCache = useQueryCache();
    useEffect(() => {    
        console.info("fired useEffect") ;
        const socket = socketIOClient('http://localhost:5000');      
        let unsub;  
        topics.forEach( ({topic, relatedQueries}) => {
            unsub = socket.on(topic, (data) => {                
                relatedQueries.forEach((query) => {                    
                    queryCache.invalidateQueries(query, {
                        throwOnError: true
                    });
                })
            })
        });       
        return unsub;
    }, [queryCache]);

   
};


export { useSocketIO as default };