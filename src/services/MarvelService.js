

class MarvelService {
    _apiBase ='https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'ecbc50ab1d1d150b779bd5f2481d19e0';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res  = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&apikey=${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        let description;
        if (char.description === '') {
            description = 'No description for this character...';
        } else if (char.description.length > 210) {
            description = char.description.slice(0, 210) + '...';
        } else {
            description = char.description;
        }


        return {
            id: char.id,
            name: char.name,
            description: description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;




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