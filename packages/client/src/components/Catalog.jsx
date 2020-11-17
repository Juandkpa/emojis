import { useQuery } from 'react-query';

const renderEmojis = (data) => {
    const elements = [];

    for (let prop in data) {
        const element = (
            <button class="card">
                <span><b>use: </b> :{prop}:</span>
                <img src={data[prop]} alt={prop} />
            </button>
        );
        elements.push(element);
    }

    return elements;
};

const Catalog = () => {
    const { isLoading, error, data } = useQuery('emojis', () => {
        return fetch(
            'https://api.github.com/emojis'
        ).then(res => res.json())
    });
    
    if (isLoading) return 'Loading ...';

    if (error) return "An error ocurred: " + error.message;
    

    return (
        <div>
            {renderEmojis(data)}
        </div>        
    );
};

export { Catalog as default };