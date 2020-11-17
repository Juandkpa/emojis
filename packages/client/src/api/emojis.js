const getEmojis = () => {
    return fetch(
        'http://localhost:5000/api/emojis'
    ).then(res => res.json());
};

export { getEmojis as default };