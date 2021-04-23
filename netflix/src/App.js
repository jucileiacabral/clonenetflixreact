import React, { useEffect, useState }  from 'react'; //useefect funçao que usa o codico que eu digitar na função abaixo
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from  './components/Header';

export default function () {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null); // a imagem de fundo do fime so aparecera quando tiver dados no setFeature 
  const [blackHeader, setblackHeader] = useState(false); // so ficar apreto quando nao rolar a tela

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList(); //pegando a lista toda com a função que criei no arq tmdb
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals'); // pegando apenas o slug originals la do app.js
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); // pra pegar um item gera numero aleatorio e multiplico pelo tamanho do array -1 porque começa do zero
      let chosen = originals[0].items.results[randonChosen]; //pegando o escolhido no randonchosen sempre que carregar a pag ele pega aleatorio
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv'); // funçao esta no tmdb.js
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) { //esse evento fica escutando o scroll y maior que 10 pra mudar a cor do header
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>
      <footer>
        rojeto realizado somente  para estudo de react, todos os direitos das imagens são da Netflix.
        Dados Extraidos de https://www.themoviedb.org/
      </footer>


      {movieList.length <= 0 && // se a lista de filme igual a 0 ou seja  demore a carregar aparece o loading é a rodinha 
        <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
        </div>}
    </div>
  );
}