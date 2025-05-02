

//const getImagePromesa = () => new Promise(resolve => resolve('htpps://sdadfsefdf.com'));
//getImagePromesa().then(console.log);

const getImagen = async() => {
    
    try {
        const apiKey = 'i2iri0gwWBsayuuAvVnTcJwNTFsk5QMA';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del Error
        console.log(error);
    }
}

getImagen();
