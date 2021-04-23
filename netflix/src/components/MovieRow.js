import React, {useState} from 'react';
import './MovieRow';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function ({ title, items }) {

    const [scrollX, setScrollX] = useState(0); //pra ficar dinamico como uso de usestate a rolagem da list de filmes

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0; //limita no 0 no inicio da lista pra nao licar espaco em branco no inicio  ao rolar pra direita
        }
        setScrollX(x);
    };
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2); //cada click dependente da tela do usuario e rola os filmes 
        let listW = items.results.length * 150; //limite final que é o tamanho da array e dependente da tela do usuario 
        if (window.innerWidth - listW > x) // tamanho da tela menos o tamnando da lisa 
        {
            x = (window.innerWidth - listW) - 60; // calculo descontando 30 de cada lado inicio e fim 
        }
        setScrollX(x);
    };

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150 // quantidade de filmes da lista x o tamanho de cada um pra centralizar a lista 
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}