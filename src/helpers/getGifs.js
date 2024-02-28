

export const getGifs = async (category ) => {

    const api_key = 'BwTSA2iUDPhaOywADc5x02PoY26IQR6r';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=15`

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
}