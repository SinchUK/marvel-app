
import { useHttp } from '../hooks/http.hook';


const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase ='https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'ecbc50ab1d1d150b779bd5f2481d19e0';
    const _baseOffset = 210;

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`);
        return res.data.results.map(_transformComic);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const getAllCharacters = async (offset = _baseOffset) => {
        const res  = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            price: comic.prices[0].price === 0 ? "Not available" : comic.prices[0].price+'$',
            thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
            url: comic.urls[0].url,
            pageCount: comic.pageCount || 'No information about the number of pages',
            // language: comic.textObjects[0] === undefined ? 'en - us' : comic.textObjects[0].language,
            language: comic.textObjects?.length ? comic.textObjects[0].language : 'en-us',
            description: comic.description || 'There is no description',
        }
    }

    const _transformCharacter = (char) => {

        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0,210)}...` : 'There is no description for this character...',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic}
}

export default useMarvelService;




// const postData = async (url, data) => {
//     let res = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     });
//     return await res.json();
// };

// async function getResource(url) {
//     let res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     return await res.json();
// }

// export {postData};
// export {getResource};