import React from 'react';
import './FeaturedMovie.css';

export default ({item} ) => {

    let firstDate = new Date(item.first_air_date); // crio instancia pra que eu consiga pegar a data da api 
    let genres =[ ]; //declaro uma var e faço um for pra pegar os itens do array da api 
    for(let i in item.genres) {
        genres.push (item.genres[i].name);
    }
    let descr = item.overview; //para que em textos descriçao grandes nao quebre a pagina 
    if(descr.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }

    return(
        <section className="featured" style={{ backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
         
        }}>
            <div className="featured--vertical"> {/* div pra escurecer a imagem com css com transparencia vertical */}
                <div className="featured--horinzontall">
                    <div className="featured--name">{item.original_name}</div> {/* informaçoes em {} pego da api formato na documentação */}
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                       <div className="featured--year">{firstDate.getFullYear()}</div>
                         {/* se for mais de 1 demporada aparece o s  */}
                      < div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' :  ''}</ div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`}className="featured--watchbutton"> ► Assistir</a>
                        <a href={`/list/add/${item.id}`}className="featured--mylistbutton"> + Minha lista</a>

                    </div>
                    {/* como genero é um array na api faço um for la em cima e depois dou um join aqui  */}
                    <div className="featured--generes"><strong>Gêneros:</strong>{genres.join( ' , ' )}</div>

                </div>
            </div>
         
             </section>
    );
   
    
}