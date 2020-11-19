import { useQuery } from 'react-query';
import getEmojis  from '../api/emojis';

const initialData = [
    {
      "_id": "5fb5510093c18e1b3d25b713",
      "name": "100",
      "command": ":100:",
      "image": "https://github.githubassets.com/images/icons/emoji/unicode/1f4af.png?v8"
    },
    {
      "_id": "5fb5510093c18e1b3d25b714",
      "name": "1234",
      "command": ":1234:",
      "image": "https://github.githubassets.com/images/icons/emoji/unicode/1f522.png?v8"
    },
    {
      "_id": "5fb5510093c18e1b3d25b715",
      "name": "+1",
      "command": ":+1:",
      "image": "https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8"
    },
    {
      "_id": "5fb5510093c18e1b3d25b716",
      "name": "-1",
      "command": ":-1:",
      "image": "https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png?v8"
    },
    {
      "_id": "5fb5510093c18e1b3d25b717",
      "name": "1st_place_medal",
      "command": ":1st_place_medal:",
      "image": "https://github.githubassets.com/images/icons/emoji/unicode/1f947.png?v8"
    }
];

const renderEmoji = ({_id, name ='test', command, image}) => {    

    return (
            <button key={_id} className="card">
                <span><b>Command: </b> {command}</span>
                <img src={image} alt={name} />
            </button>
        );        
    
};

const Catalog = () => {
    const { isLoading, error, data } = useQuery('emojis', getEmojis, {
        initialData,
        initialStale: true
    });
    
    if (isLoading) return 'Loading ...';

    if (error) return "An error ocurred: " + error.message;
    

    return (
        <div>            
            {data.map(renderEmoji)}
        </div>        
    );
};

export { Catalog as default };
