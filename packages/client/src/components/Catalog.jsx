import { useQuery } from 'react-query';
import getEmojis  from '../api/emojis';

const renderEmoji = ({_id, name ='test', command, image}) => {    

    return (
            <button key={_id} className="card">
                <span><b>Command: </b> {command}</span>
                <img src={image} alt={name} />
            </button>
        );        
    
};

const Catalog = () => {
    const { isLoading, error, data } = useQuery('emojis', getEmojis);
    
    if (isLoading) return 'Loading ...';

    if (error) return "An error ocurred: " + error.message;
    

    return (
        <div>
            {data.map(renderEmoji)}
        </div>        
    );
};

export { Catalog as default };