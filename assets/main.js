const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCFl7yKfcRcFmIUbKeCA-SJQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a04eb97307msh44aa23fdbd332ecp12efbcjsn35ee81e0c32a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// fetch(API , options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//funcion que se llama asi misma, para no realizar el llamado manualmente
//tiene que ser anonima
(async () => {
 try {
    const videos = await fetchData(API);
    //traigo los items de la api, y aplica el template a cada uno de los elementos con map, al mapearlos
    let view =  `
    ${videos.items.map(video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    
                </h3>
            </div>
        </div>
    `).slice(0,8).join('')}
    `;      //mostrar solo 4 elementos de los 9 y juntarlos con join
    content.innerHTML = view
 } catch (error) {
    console.log(error)
 }
})();//esta es la sentencia que cuando se eeste cargando el archivo permite que se llame asi misma

