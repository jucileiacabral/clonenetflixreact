const API_KEY = 'd4ad4a01840c1b04f1ad76527671e78c' ;
const API_BASE = 'https://api.themoviedb.org/3/movie/76341?api_key=<d4ad4a01840c1b04f1ad76527671e78c>' ;

//funcão que pega  as informaçoes na url (endpoind) que eu quero pegar e retorna um json
const basicFecth = async (endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}` ) ).json( );

}
   
export default {
    getHomeList: async ( ) => { //pegue a lista da pag proncipal do meu netflix com requisição asincrona
        return [
           {
                slug:'originais',
                title:' Originais do Netflix',
                items: await basicFecth( `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}` ) // coloco o endpoint onde a função vai buscar () documentação da api ) acrescenta a linguagem e a chave key que declarei la no inicio 
            },// await fica esperando a resposta da função basicFeth e vai pro proximo
            {
                slug: 'trending',
                title: 'Recomendados para você',
                 items: await basicFecth( ` /trending/all/week?language=pt-BR&api_key=${API_KEY}` )
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFecth( ` /movie/top_rated?&language=pt-BR&api_key=${API_KEY}` )
             },
             {
                slug: 'action',
                title: 'Ação',
                items: await basicFecth( ` /discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}` )
             },
            {
               slug: 'comedy',
               title: 'Comédia',
               items: await basicFecth(  ` /discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {  
               slug: 'horror',
               title: 'Terror',
                items: await basicFecth(  `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
           },
           {
                slug: 'Romace',
                title: 'Romance',
                items: await basicFecth(  `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentários',
                items: await basicFecth(  `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo : async (movieId, type) =>{// funçao de pegar info do filme especifico no parentese as info que quero 
        let info = {}; // uso essa função la no app.js
        if(movieId) {
            switch(type){
                case 'movei'://filmes
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                 case 'tv'://seriados
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

         return info;
     }

}