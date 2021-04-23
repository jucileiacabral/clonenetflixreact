import React  from 'react';
import './Header.css';

        export default function ({ black }) {
    return (
        <header className={black ? 'black' : ' , '}>{/*assim nas chaves quando rolar a tela o header fica preto */}
            <div className="header--logo">
                <a href="/">
                    <img src="https://ibcdn.canaltech.com.br/0CpK2Ihadx45X8gDT2rxsu_jmws=/95x53:1822x1025/1400x788/smart/i377413.jpeg" />
                </a>
            </div>
            <div className="header--user">
                <a>
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuario" />
                </a>
            </div>
        </header>
    );   

}
