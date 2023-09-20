export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=e0HBE3LF25UjMZl0ck1e6KiK2YjLyGan&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}