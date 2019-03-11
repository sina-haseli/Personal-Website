import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div id="app">
          <main className="py-4">
            <header>
                <h1>Sina haseli</h1>
                <div className="header__description">"
                    developer & indie maker. finding solutions for problems 👨🏻&zwj;💻🐺🥗💪🇦🇹
                    "</div>
                <div className="header__social">
                    <ul>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-telegram"></i></a></li>
                    </ul>
                </div>
            </header>
            <main>
                <h2>PERSONAL GOALS FOR 2019</h2>
                <div className="container">
                    <div className="card__container">
                        <div className="row">
                            <div className="card__col col-12 col-lg-6"><div className="card card--red"><div className="card__upper"><div className="card__title">Do 365 Business Developer Tasks</div></div><div className="card__lower"><span className="card__progress--status">25/365</span><span className="card__progress--bar"><span className="card__progress-bar-inner" ></span></span></div></div></div>
                            <div className="card__col col-12 col-lg-6">asd</div>
                            <div className="card__col col-12 col-lg-4">asd</div>
                            <div className="card__col col-12 col-lg-4">asd</div>
                            <div className="card__col col-12 col-lg-4">asd</div>
                            <div className="card__col col-12 col-lg-8">asd</div>
                            <div className="card__col col-12 col-lg-4">asd</div>
                        </div>
                    </div>
                </div>
            </main>
          </main>
        </div>
    );
  }
}

export default App;
